import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
import { JustosService } from "./services/justos.service";

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LosJustosComponent } from './components/los-justos/los-justos.component';
import { JustoComponent } from './components/justo/justo.component';
import { SearchJustoComponent } from './components/search-justo/search-justo.component';
import { JustoCardComponent } from './components/justo-card/justo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LosJustosComponent,
    JustoComponent,
    SearchJustoComponent,
    JustoCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    JustosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
