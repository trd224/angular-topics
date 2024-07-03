import { Component, InjectionToken, Injector } from '@angular/core';
import { DynamicComponent2Component } from '../dynamic-component2/dynamic-component2.component';


@Component({
  selector: 'app-dynamic-component2-container',
  templateUrl: './dynamic-component-container2.component.html',
  styleUrls: ['./dynamic-component-container2.component.scss']
})
export class DynamicComponentContainer2Component {

  dynamicComponent: any;
  myData = { message: 'Hello from parent!, data pass using input' };

 

  load(){
    this.dynamicComponent = DynamicComponent2Component;
  }


  onDataReceived(event: Event){
    alert("sdsd")
    console.log(event);
  }
}
