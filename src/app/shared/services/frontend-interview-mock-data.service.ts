import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FrontendInterviewMockData {
  url =
    'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';
  // constructor(private readonly http: HttpClient) {}

  getDados() {
    console.log(this.url)
  }
}
