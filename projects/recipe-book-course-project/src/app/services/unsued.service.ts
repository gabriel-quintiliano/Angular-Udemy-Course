console.log("FILE: unused.service.ts foi construído: ", Date.now())
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsuedService {

  constructor() {
    console.log("SERVICE: UnusedService foi construído: ", Date.now())
  }
}
