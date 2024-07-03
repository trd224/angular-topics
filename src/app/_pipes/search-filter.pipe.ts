import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any, searchString: any): any {
    if(!searchString){
      return list;
    }
    return list.filter((item:any) => {
      if(item.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1){
        return item.name;
      }
      
    })

   
  }

}
