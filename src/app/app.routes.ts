import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LosJustosComponent } from './components/los-justos/los-justos.component';
import { JustoComponent } from './components/justo/justo.component';


const APP_ROUTES: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: 'about' , component: AboutComponent},
    { path: 'los-justos' , component: LosJustosComponent},
    { path: 'justo/:id' , component: JustoComponent},
    { path: '**' , pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)