import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'green'
})

@View({
    template: '<h1>Green</h1>'
})

export class Green {
    constructor () {
        console.log('Green');
    }
}
