import { Component, Inject, OnInit } from '@angular/core';
import { DATA_TOKEN } from 'src/app/_tokens/dataTokens';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})



export class DynamicComponentComponent implements OnInit {

  constructor(@Inject(DATA_TOKEN) public data: any){}

  ngOnInit(): void {
    console.log(this.data);
  }

}
