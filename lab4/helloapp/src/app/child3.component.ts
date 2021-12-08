import {Component} from '@angular/core';
     
@Component({
    selector: 'child3-comp',
    template: `<input [(ngModel)]="average" type="text" placeholder="Середній бал">`,
})
export class Child3Component{
    private _average: number = 0;

    get average(): string {
        return this._average.toString();
    }

    set average(s: string) {
        let f = parseFloat(s);
        if (!isNaN(f))
            this._average = f;
    }
}