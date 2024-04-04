import { Component } from '@angular/core';
import { FrontendInterviewMockData } from '../../shared/services/frontend-interview-mock-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private teste: FrontendInterviewMockData) {}

  getaa() {
    this.teste.getDados();
  }

  // Lógica do componente pode ser adicionada aqui
}
