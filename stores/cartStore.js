import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

class CartStore {
  items = [
    {
      perfumeId: 1,
      quantity: 2,
    },
    {
      perfumeId: 3,
      quantity: 2,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  fetchItems = async () => {
    const items = await AsyncStorage.getItem("cart");
    this.items = items ? JSON.parse(items) : [];
  };

  addTocart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.perfumeId === newItem.perfumeId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  deleteFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.perfumeId !== itemId);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  checkout = async () => {
    //from frontend first steps
    // this.items = [];
    // await AsyncStorage.removeItem("cart");
    // alert("Done payment");
    try {
      await instance.post("/checkout", this.items);
      this.items = [];
      await AsyncStorage.removeItem("cart");
      alert("Done payment");
    } catch (error) {
      console.error(error);
    }
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}
const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
