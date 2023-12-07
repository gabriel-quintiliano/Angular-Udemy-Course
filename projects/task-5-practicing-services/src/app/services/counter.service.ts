import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	countArrayElements(arr: any[]) {
		return arr.length;
	}
}
