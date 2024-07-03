import { Component, Injector } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { DATA_TOKEN } from 'src/app/_tokens/dataTokens';

@Component({
  selector: 'app-dynamic-component-container',
  templateUrl: './dynamic-component-container.component.html',
  styleUrls: ['./dynamic-component-container.component.scss']
})
export class DynamicComponentContainerComponent {

  dynamicComponent: any;
  myData = { message: 'Hello from parent! data pass using custom injector' };

  
  constructor(public injector: Injector){}

  createInjector(){
    return Injector.create({
      providers: [
        {provide: DATA_TOKEN, useValue: this.myData}
      ]
    })
  }

  myInjector = this.createInjector();


  load(){
    this.dynamicComponent = DynamicComponentComponent;
  }
}
