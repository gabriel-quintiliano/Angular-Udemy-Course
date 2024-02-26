console.log("FILE: unused.module.ts roudou: ", Date.now())

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UnusedModule { 
    constructor() {
        console.log("MODULE: UnusedModule construído: ", Date.now())
    }
}
