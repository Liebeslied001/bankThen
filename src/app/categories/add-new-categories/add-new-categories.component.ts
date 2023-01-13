import { Component,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-categories',
  templateUrl: './add-new-categories.component.html',
  styleUrls: ['./add-new-categories.component.css']
})
export class AddNewCategoriesComponent {
  @Input() display: boolean = false
  @Input() handleClickOutput: any  = null

  constructor() { }

  ngOnInit(): void {
  }

}
