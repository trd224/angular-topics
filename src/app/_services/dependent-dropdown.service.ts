import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependentDropdownService {

  state: any[] = [
    {id: 1, name: "Rajasthan", district: ["kota", "Jaipur", "Ajmer"]},
    {id: 1, name: "Panjab", district: ["Chandighar", "Jalandhar", "Batinda"]},
    {id: 1, name: "MP", district: ["Indor", "Bhopal", "Shyopur"]},
  ]

  constructor() { }

  getDistrict(value: any){
    //console.log(value)

    return this.state.find(s => s.name == value).district;
   
  }
}
