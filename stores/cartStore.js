import { makeAutoObservable } from "mobx";

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
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  addTocart = (newItem) => {
    const foundItem = this.items.find(
      (item) => item.perfumeId === newItem.perfumeId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
  };
}
const cartStore = new CartStore();

export default cartStore;
