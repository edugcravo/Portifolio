import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSuperiorComponent } from './componetes/menus/menu-superior/menu-superior.component';
import { SobreComponent } from './componetes/sobre/sobre.component';
import { HabilidadesComponent } from './componetes/habilidades/habilidades.component';



const APP_ROUTES: Routes = [
  { path:'', redirectTo:'/sobre',pathMatch:'full'},
  { path: 'menu', component: MenuSuperiorComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'habilidades', component: HabilidadesComponent }

  
];



export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);/Parametro é a constante declarada a cima/
