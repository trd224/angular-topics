import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-component2',
  templateUrl: './dynamic-component2.component.html',
  styleUrls: ['./dynamic-component2.component.scss']
})



export class DynamicComponent2Component implements OnInit {

  @Input() data: any;
  @Output() dataToSend = new EventEmitter<any>();
  

  ngOnInit(): void {
    console.log(this.data);
  }

  sendDataToParent(){
    this.dataToSend.emit({message: "Data from Dynamic component !"})
  }

}

