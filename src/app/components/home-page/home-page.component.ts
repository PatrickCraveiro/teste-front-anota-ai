import { Component } from '@angular/core';
import { FrontendInterviewMockDataService } from '../../shared/services/frontend-interview-mock-data.service';
import {
  ICardResponse,
} from './card/@support/card.component.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cardData: ICardResponse[] = [];
  constructor(private dataService: FrontendInterviewMockDataService) {
    this.fetchCardData();
  }

  fetchCardData() {
    this.dataService.getCardData().subscribe(
      (response) => {
        this.cardData = response;
      },
      (error) => {
        console.error('Erro ao obter os dados:', error);
      }
    );
  }

  onDeleteCard(cardId: number) {
    this.cardData = this.cardData.filter((card) => card.id !== cardId);
  }
}
