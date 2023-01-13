import { Component } from '@angular/core';
import { TabModelItem } from 'src/app/models/tab.model';

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css'],
})
export class CreateNewCategoryComponent {

  public tabActive: string = 'expenses'
  public isOpenModal: boolean = true
  public tabs: TabModelItem[] = [
    {
      name: 'Expenses',
      alias: 'expenses',
      icon: '−'
    },
    {
      name: 'Income',
      alias: 'income',
      icon: '+'
    }
  ]

  color: string = '#0CB7D5';
  money: number = 0;
  textSalario: string = '';
  icon: string = '';

  handleClickTab = ($event: any, tabAlias: string) => {
    console.log(tabAlias)
    this.tabActive = tabAlias
  }

  handleClickAddCategory = () => {
    console.log('click')
    this.isOpenModal = true
  }

  handleClickOutput = ($event: any) => {
    this.isOpenModal = false
  }
}
