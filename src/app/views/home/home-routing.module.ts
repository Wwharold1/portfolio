import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './items/about-me/about-me.component';
import { ContactComponent } from './items/contact/contact.component';
import { NavbarComponent } from './items/navbar/navbar.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent , children: [
        {
            path: '',
            component: NavbarComponent,
            data: { animation: 0}
        },
        {
            path: 'contact',
            component: ContactComponent,
            data: { animation: 1}
        },
        {
            path: 'aboutme',
            component: AboutMeComponent,
            data: { animation: 2}
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
