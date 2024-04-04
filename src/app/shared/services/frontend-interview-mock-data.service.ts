import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardResponse } from '../../components/home-page/card/@support/card.component.interface';

@Injectable({ providedIn: 'root' })
export class FrontendInterviewMockDataService {
  url =
    'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';
  constructor(private readonly http: HttpClient) {}

  getCardData(): Observable<ICardResponse[]> {
    return this.http.get<ICardResponse[]>(this.url);
  }
}
