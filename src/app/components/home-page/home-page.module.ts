import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, CardComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
