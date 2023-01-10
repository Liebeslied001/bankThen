import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  @Input() transaction: Transaction = {
    id: 0,
    icon: "",
    category: "",
    amount: 0
    }
}
