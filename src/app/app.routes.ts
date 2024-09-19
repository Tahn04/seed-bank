import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DevPageComponent } from './dev-page/dev-page.component';  

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent, 
        title: 'Main Page'
    }, 
    {
        path: 'dev',
        component: DevPageComponent,
        title: 'Developer Page'
    }
];
