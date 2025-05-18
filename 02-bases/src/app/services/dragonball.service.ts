import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('Characters');

  return characters ? JSON.parse(characters) : []
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  // El efecto se ejecuta cada vez que cambia el valor de characters
  saveToLocalStorage = effect(() => {
    localStorage.setItem('Characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((current) => [...current, character]);
  }
}
