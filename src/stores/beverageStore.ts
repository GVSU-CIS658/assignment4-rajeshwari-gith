import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import type { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures as string[],
    currentTemp: tempretures[0] as string,
    bases: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,
    beverageName: "" as string,
    savedBeverages: [] as BeverageType[],
  }),

  actions: {
    makeBeverage() {
      const newBeverage: BeverageType = {
        id: Date.now().toString(),
        name: this.beverageName,
        temp: this.currentTemp,
        base: { ...this.currentBase },
        syrup: { ...this.currentSyrup },
        creamer: { ...this.currentCreamer },
      };
      this.savedBeverages.push(newBeverage);
      this.beverageName = "";
    },
    showBeverage(beverage: BeverageType) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
    },
  },
  persist: true,
});
