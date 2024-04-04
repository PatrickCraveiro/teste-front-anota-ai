import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, CardComponent, SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
