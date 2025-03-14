import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = null; 

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id'); 
    if (pokemonId) {
      this.getPokemonDetails(pokemonId);
    }
  }

  getPokemonDetails(id: string) {
    this.pokemonService.getPokemonDetails(id).subscribe(
      (data) => this.pokemon = data,
      (error) => console.error('Error obteniendo detalles del Pokémon:', error)
    );
  }
}
