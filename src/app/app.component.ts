import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageModule } from './components/home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HttpClientModule, HomePageModule],
})
export class AppComponent {
  title = 'teste-front-anota-ai';
}
