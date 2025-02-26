import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPokemonPage } from './search-pokemon.page';

describe('SearchPokemonPage', () => {
  let component: SearchPokemonPage;
  let fixture: ComponentFixture<SearchPokemonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
