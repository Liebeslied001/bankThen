import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {
  color: string = '#0CB7D5';
  money: number = 0;
  textSalario: string = '';
  icon: string = '';
}
