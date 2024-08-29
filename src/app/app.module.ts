import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN'
import localefrCA from '@angular/common/locales/fr-CA'

import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsHN);
registerLocaleData(localefrCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // PrimeNgModule,
    SharedModule

  ],
  providers:[
    {
      provide:LOCALE_ID,useValue:'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
