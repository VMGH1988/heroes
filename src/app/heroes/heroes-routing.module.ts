import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

// localhost:4200/heroes
const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[ // esto es para poner las hijas localhost:4200/heroes/loquesea
      {path:'new-hero', component: NewPageComponent},
      {path:'search', component: SearchPageComponent},
      {path:'edit/:id', component: NewPageComponent},
      {path:'list', component: ListPageComponent},
      {path:':id', component: HeroPageComponent}, // se pone al final porque sino cogeria todo lo que hay en la url como id, entonces primero mira las otras y este lo mira al final
      {path:'**', redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
