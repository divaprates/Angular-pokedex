import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = '';

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<any> {
    return this.http.get(this.baseURL + pokemonName);
  }

  getPokemons(offset = 0, limit = 34): Observable<any> {
    return this.http.get<any>(`${this.baseURL}?offset=${offset}&limit=${limit}`);
  }
}
