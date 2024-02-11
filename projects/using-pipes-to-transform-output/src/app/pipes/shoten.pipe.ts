import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shoten'
})
export class ShotenPipe implements PipeTransform {
    // shortens the value to only the first 10 characters
    transform(value: string, limit?: number): string {
        
        if (limit && value.length > limit) {
            return value.substring(0, limit) + '...';
        }

        return value
    }
}

/* This example bellow is to show that you can set up any type of parameter to the 
 * PipeTransform method just like in any other function/method */

// export class ShotenPipe implements PipeTransform {
//
//     transform(value: unknown, a1: string, a2: number, a3: {name: string}): unknown {
//         console.log('value: ', value)
//         console.log(a1)
//         console.log(a2)
//         console.log(a3)
//         return null;
//     }
// 
// }
