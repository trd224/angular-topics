import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  

  filterString!: any;

  list: any[] = [
    {id: 1, name:'nameOne1'},
    {id: 2, name:'nameTwo2'},
    {id: 3, name:'nameThree3'},
    {id: 4, name:'nameFour4'},
    {id: 5, name:'nameFive5'},
    {id: 6, name:'nameSix6'},
    {id: 7, name:'nameSeven7'},
    {id: 8, name:'nameEight8'},
    {id: 9, name:'nameNine9'},
    {id: 10, name:'nameTen10'},
  ]

}
