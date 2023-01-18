import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private colors: any = {
    red: '#f44261',
    orange: '#f97216',
    yellow: '#f59e0b',
    green: '#10b981',
    'green-aqua': '#10b981',
    turqoise: '#06b6d4',
    'blue-light': '#0ea5e9',
    blue: '#3b82f6',
    gray: '#6b7380',
    purple: '#8b5cf6',
  };

  private icons: any = {
    building: 'fa-solid fa-building-columns',
    shopping: 'fa-solid fa-cart-shopping',
    car: 'fa-solid fa-car',
    health: 'fa-solid fa-laptop-medical',
    gift: 'fa-solid fa-gift',
    education: 'fa-solid fa-chalkboard',
  };

  private category = {
    rent: {
      text: 'Rent',
      color: this.colors.gray,
      icon: this.icons.building,
    },
    salary: {
      text: 'Salary',
      color: this.colors.green,
      icon: this.icons.building,
    },
    grocery: {
      text: 'Groceries',
      color: this.colors.turqoise,
      icon: this.icons.shopping,
    },
    transport: {
      text: 'Transport',
      color: this.colors.orange,
      icon: this.icons.car,
    },
    health: {
      text: 'Health',
      color: this.colors.red,
      icon: this.icons.health,
    },
    gift: {
      text: 'Gifts',
      color: this.colors.purple,
      icon: this.icons.gift,
    },
    education: {
      text: 'Education',
      color: this.colors['blue-light'],
      icon: this.icons.education,
    },
  };

  transactions: any =[
    {
      date: '07/03/2022',
      total: 1540,
      moves: [
        {
          category: this.category.rent.text,
          description: 'Description',
          icon: this.category.rent.icon,
          color: this.category.rent.color,
          mount: -500,
          alias: 'Rent',
        },
        {
          category: this.category.salary.text,
          description: 'Description',
          icon: this.category.salary.icon,
          color: this.category.salary.color,
          mount: 2000,
          alias: 'salary',
        },
        {
          category: this.category.transport.text,
          description: 'Description',
          icon: this.category.transport.icon,
          color: this.category.transport.color,
          mount: -10,
          alias: 'transport',
        },
      ],
    },
    {
      date: '06/03/2022',
      total: -320,
      moves: [
        {
          category: this.category.education.text,
          description: 'Description',
          icon: this.category.education.icon,
          color: this.category.education.color,
          mount: -250,
          alias: 'education',
        },
        {
          category: this.category.grocery.text,
          description: 'Description',
          icon: this.category.grocery.icon,
          color: this.category.grocery.color,
          mount: -20,
          alias: 'grocery',
        },
        {
          category: this.category.gift.text,
          description: 'Description',
          icon: this.category.gift.icon,
          color: this.category.gift.color,
          mount: -50,
          alias: 'gift',
        },
      ],
    },
    {
      date: '05/03/2022',
      total: -500,
      moves: [
        {
          category: this.category.health.text,
          description: 'Description',
          icon: this.category.health.icon,
          color: this.category.health.color,
          mount: -500,
          alias: 'health',
        },
      ],
    }
    
  ];

  constructor(    
    private http: HttpClient
    ) { }


  getAllTransactions(){
    return this.transactions()
  }
}
