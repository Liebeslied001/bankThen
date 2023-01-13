import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCategoriesComponent } from './layout-categories/layout-categories.component';
import { AddNewCategoriesComponent } from './add-new-categories/add-new-categories.component';

@NgModule({
  declarations: [
    LayoutCategoriesComponent,
    AddNewCategoriesComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    LayoutCategoriesComponent,
    AddNewCategoriesComponent
  ]
})
export class CategoriesModule { }
