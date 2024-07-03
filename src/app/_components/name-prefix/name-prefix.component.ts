import { Component } from '@angular/core';

@Component({
  selector: 'app-name-prefix',
  templateUrl: './name-prefix.component.html',
  styleUrls: ['./name-prefix.component.scss']
})
export class NamePrefixComponent {

  names = [
    {name: 'rizwan', gender: 'male'},
    {name: 'ritu', gender: 'female'},
    {name: 'lalu', gender: 'male'},
    {name: 'gudiya', gender: 'female'},
  ]
  
}
