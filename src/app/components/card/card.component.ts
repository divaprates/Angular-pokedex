import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { toUpperCaseFirst } from 'src/app/utils/string.util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', 'card-attributes.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input()
  namePokemon!: string;

  pokemon: Pokemon = {
    name: ''
  };

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.namePokemon).subscribe(data => {

      this.pokemon.name = toUpperCaseFirst(data.name);
      this.pokemon.image = data.sprites.other.dream_world.front_default;
      this.pokemon.attributes = data.types.map((typeSlot: any) => typeSlot.type.name);
      this.pokemon.firstAtt = this.pokemon.attributes? this.pokemon.attributes[0] : '';

    });
  }

}
