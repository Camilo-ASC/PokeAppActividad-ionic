import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.page.html',
  styleUrls: ['./search-pokemon.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] 
})
export class SearchPokemonPage {
  searchQuery: string = '';
  pokemon: any = null;
  errorMessage: string = '';

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    if (!this.searchQuery.trim()) {
      this.errorMessage = 'Por favor, ingresa un nombre o ID.';
      this.pokemon = null;
      return;
    }

    this.pokemonService.getPokemonDetails(this.searchQuery.toLowerCase()).subscribe(
      (data) => {
        this.pokemon = data;
        this.errorMessage = '';
      },
      () => {
        this.pokemon = null;
        this.errorMessage = 'Pokémon no encontrado. Intenta con otro nombre o ID.';
      }
    );
  }
}
