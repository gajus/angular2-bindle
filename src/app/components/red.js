import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'red'
})

@View({
    template: '<h1>Red</h1>'
})

export class Red {
    constructor () {
        console.log('Red');
    }
}
