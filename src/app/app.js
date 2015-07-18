import { Component, View, bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, RouteConfig, RouterOutlet, RouterLink, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { Red } from './components/red/red';
import { Green } from './components/green/green';

@Component({
    selector: 'app'
})

// https://github.com/angular/angular/blob/master/modules/angular2/src/core/annotations_impl/view.ts
@View({
    directives: [RouterOutlet, RouterLink],
    template: require('./app.html'),
    styles: [
        require('./app.scss')
    ]
})

@RouteConfig([
    {
        path: '/',
        component: Red,
        as: 'red'
    },
    {
        path: '/green',
        component: Green,
        as: 'green'
    }
])

class App {
    constructor () {
        console.log('App');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(App, [
        routerInjectables,
        // https://github.com/angular/angular/blob/master/modules/angular2/src/router/hash_location_strategy.ts
        // https://github.com/angular/angular/blob/master/modules/angular2/src/router/html5_location_strategy.ts
        bind(LocationStrategy).toClass(HashLocationStrategy)
    ]);
});

// webpack --watch --progress
// webpack-dev-server --hot --inline
// http-server -a 127.0.0.1 -p 8000
