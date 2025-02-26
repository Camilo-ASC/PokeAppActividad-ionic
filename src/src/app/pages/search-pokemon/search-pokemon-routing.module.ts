import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPokemonPage } from './search-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPokemonPageRoutingModule {}
