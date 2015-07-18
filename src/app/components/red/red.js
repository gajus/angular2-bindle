import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'red'
})

@View({
    template: require('./red.html')
})

export class Red {
    constructor () {
        console.log('Red');
    }
}
