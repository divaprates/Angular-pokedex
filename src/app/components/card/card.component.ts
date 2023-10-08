import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', 'card-attributes.component.scss']
})
export class CardComponent implements OnInit {
  
  name: string = "BULBASAUR";
  attributes: string[] = ['fire', 'rock'];
  firstAtt: string = ''
  image: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon('BULBASAUR');
    
    this.firstAtt = this.attributes[0];
  }

}
