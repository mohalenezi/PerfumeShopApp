import { makeAutoObservable } from "mobx";

import instance from "./instance";

class PerfumeStore {
  perfumes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPerfumes = async () => {
    try {
      const response = await instance.get("/perfumes");
      this.perfumes = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchPerfumes: ", error);
    }
  };

  getPerfumeById = (perfumeId) =>
    this.perfumes.find((perfume) => perfume.id === perfumeId);
}

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;
