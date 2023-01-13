import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-categories',
  templateUrl: './add-new-categories.component.html',
  styleUrls: ['./add-new-categories.component.css']
})
export class AddNewCategoriesComponent {
  @Input() display: boolean = false
  @Output() clickClose: EventEmitter<any>  = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClickClose = ($event: any) => {
    if ($event?.target?.dataset.id === 'modal') {
      this.clickClose.emit()
    }
  }

}
