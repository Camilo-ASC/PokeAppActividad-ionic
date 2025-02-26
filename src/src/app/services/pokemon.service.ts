import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = environment.apiUrl; // Usamos la URL desde environment.ts

  constructor(private http: HttpClient) { }


  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Aqui obtenemos sus detalles ya sea por el nombre o ID
  getPokemonDetails(pokemonId: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${pokemonId}`);
  }
}
