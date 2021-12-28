import { FooterComponent } from './footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CardItemComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }