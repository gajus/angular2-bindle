import 'zone.js'
import 'reflect-metadata';
import 'es6-shim';
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>My first Angular 2 App</h1>'
})

class AppComponent {

}

bootstrap(AppComponent);

/*
console.log('OK');

// webpack --watch --progress --debug --devtool eval-source-map



*/
