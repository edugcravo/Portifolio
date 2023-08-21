import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './componetes/menus/menu-superior/menu-superior.component';
import { routing } from './app.routing';
import { SobreComponent } from './componetes/sobre/sobre.component';
import { HabilidadesComponent } from './componetes/habilidades/habilidades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './componetes/contato/contato.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    SobreComponent,
    HabilidadesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
