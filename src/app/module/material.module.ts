import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatCardModule],
  exports: [MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatCardModule],
})
export class MaterialMdoule {}
