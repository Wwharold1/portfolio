import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './items/about-me/about-me.component';
import { ContactComponent } from './items/contact/contact.component';
import { NavbarComponent } from './items/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutMeComponent,
    NavbarComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
