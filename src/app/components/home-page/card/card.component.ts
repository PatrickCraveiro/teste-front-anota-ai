import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICardResponse, CardType } from './@support/card.component.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: ICardResponse;
  @Output() onDeleteCard = new EventEmitter<number>();

  cardTypes = {
    1: 'Paisagem',
    2: 'Flor',
    3: 'Pizza',
  };

  getCardType(type: CardType): string {
    return this.cardTypes[type];
  }

  handleClickDeleteCard(cardId: number) {
    this.onDeleteCard.emit(cardId);
  }
}
