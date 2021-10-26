import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: number[] | string[]): unknown {
    if(value[3] < 10){
      value[3] = "0" + value[3]
    }
    if(value[4] < 10){
      value[4] = "0" + value[4]
    }
    if(value[5] < 10){
      value[5] = "0" + value[5]
    }
    return value[2] + "/" + value[1] + "/" + value[0] + " " + value[3] + ":" + value[4] + ":" + value[5];
  }

}
