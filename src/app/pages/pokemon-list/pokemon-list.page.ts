import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PokemonListPage implements OnInit {
  pokemonList: any[] = []; 
  limit = 20;
  offset = 0;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokemonService.getPokemonList(this.limit, this.offset).subscribe(
      (response: any) => this.pokemonList = response.results,
      (error) => console.error('Error obteniendo lista de Pokémon:', error)
    );
  }

  goToDetail(pokemon: any) {
    const id = pokemon.url.split('/').slice(-2, -1)[0]; 
    this.router.navigate(['/pokemon-detail', id]);
  }
}
