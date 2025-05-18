import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-super',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  // Forma Tradicional para inyeccion de dependencias
  // constructor(
  //   public dragonballService: DragonballService
  // ) { }

  // Forma Recomendada para inyeccion de dependencias
  public dragonballService = inject(DragonballService);
}
