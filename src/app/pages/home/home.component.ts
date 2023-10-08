import { Component, OnInit } from '@angular/core';
import { PokemonSimple } from 'src/app/models/PokemonSimple';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  pokemonNameList: PokemonSimple[] = [];
  limit: number = 12;
  offset: number = 0;
  maxRecord: number = 151;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadingPokemonItens(this.offset, this.limit);
  }

  loadingPokemonItens(offset: number, limit: number) {
    this.pokemonService.getPokemons(offset, limit).subscribe((data) => {
      this.pokemonNameList.push(...data.results);
    });
  }

  onScrollUp(event: any) {
    console.log("onScrollUp");
  }

  setLimit() {
    this.offset += this.limit;
    let qtdRecordNextPage = this.offset + this.limit;
    if (qtdRecordNextPage >= this.maxRecord) {
      const newLimit = this.maxRecord - this.offset;
      this.loadingPokemonItens(this.offset, newLimit);
    } else {
      this.loadingPokemonItens(this.offset, this.limit);
    }
  }
}
