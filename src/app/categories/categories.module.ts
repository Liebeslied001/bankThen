import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCategoriesComponent } from './add-new-categories/add-new-categories.component';

@NgModule({
  declarations: [
    AddNewCategoriesComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    AddNewCategoriesComponent
  ]
})
export class CategoriesModule { }
