import { Component, Input } from '@angular/core';
import { ITypes } from './@support/card.component.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imgSrc!: string;
  @Input() type!: ITypes;

  types = {
    1: 'Paisagem',
    2: 'Flor',
    3: 'Pizza',
  };

  getType(type: ITypes): string {
    return this.types[type];
  }

  deleteCard() {
    console.log('delete');
  }
  // Lógica do componente pode ser adicionada aqui
}
