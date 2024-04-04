import { Component } from '@angular/core';
import { FrontendInterviewMockDataService } from '../../shared/services/frontend-interview-mock-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICardResponse } from './card/@support/card.component.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cardData: ICardResponse[] = [];
  cardDataInServer: ICardResponse[] = [];
  homePageForm!: FormGroup;
  constructor(
    private dataService: FrontendInterviewMockDataService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
    this.fetchCardData();
  }

  private createForm() {
    this.homePageForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  fetchCardData() {
    this.dataService.getCardData().subscribe(
      (response) => {
        this.cardData = response;
        this.cardDataInServer = response;
      },
      (error) => {
        console.error('Erro ao obter os dados:', error);
      }
    );
  }

  handleClickSearch() {
    const search = this.homePageForm.get('search')?.value;

    this.cardData = this.cardDataInServer.filter(
      (card) =>
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  onDeleteCard(cardId: number) {
    this.cardData = this.cardData.filter((card) => card.id !== cardId);
  }
}
