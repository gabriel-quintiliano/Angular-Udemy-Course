import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class RangeValidatorService {
    timesRan: number = 0;
    lastRunTimestamp!: string;
    latestPathRun: string = '/';

    private RANGE_MIN = 0;
    private RANGE_MAX = 10;

    isValid(range: number) {

        console.log("isValid method run, times run is currently: ", this.timesRan)
        this.lastRunTimestamp = curTimestampToDateFormat();
        this.timesRan++;
        console.log("times run after is: ", this.timesRan)

        if (typeof range == "number" && range > this.RANGE_MIN && range < this.RANGE_MAX) {
            return true;
        }

        return false;
    }

    resetStats() {
        this.timesRan = 0;
    }
}

function curTimestampToDateFormat() {
    // Create a new Date object using the timestamp in milliseconds
    const date = new Date();
    
    // Get individual date components
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    // Format the date components into a string
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    
    return formattedDate;
}