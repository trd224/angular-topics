import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePrefix'
})
export class NamePrefixPipe implements PipeTransform {

  transform(value: any, args: any): any {
    //console.log(value, args)
    if(args == 'male'){
      return `Mr ${value}`;
    }
    else{
      return `Mrs ${value}`
    }
  }

}
