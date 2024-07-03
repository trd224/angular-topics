import { Component } from '@angular/core';
import { DependentDropdownService } from 'src/app/_services/dependent-dropdown.service';

@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.scss']
})
export class DependentDropdownComponent {

  state: any[] = [];
  district: any[] = [];

  constructor(public dependentDropdownService: DependentDropdownService){
    this.state = this.dependentDropdownService.state;
    this.district = this.state[0].district;
  }

  getDistrict(event: any){
    this.district = this.dependentDropdownService.getDistrict(event.target.value);
    console.log(this.district);
  }

}
