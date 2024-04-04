import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageModule } from './components/home-page/home-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HomePageModule],
})
export class AppComponent {
  title = 'teste-front-anota-ai';
}
