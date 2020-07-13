import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class AppModuleShoppingCart { }
