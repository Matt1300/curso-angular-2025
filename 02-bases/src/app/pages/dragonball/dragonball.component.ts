import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball.component.html',
})
export class DragonballComponent {
  name = signal('Freezer');
  power = signal(8000);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 4, name: 'Piccolo', power: 500 },
    // { id: 3, name: 'Gohan', power: 7000 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((current) => [...current, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
