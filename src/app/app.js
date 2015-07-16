import { Component, View, bootstrap } from 'angular2/angular2';
import { routerInjectables, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';

import { Red } from './components/red';
import { Green } from './components/green';

@Component({
    selector: 'app'
})

@View({
    directives: [RouterOutlet, RouterLink],
    template: require('./app.html')
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

bootstrap(App, [routerInjectables]);

// webpack --watch --progress --debug
// http-server -a 127.0.0.1 -p 8000
