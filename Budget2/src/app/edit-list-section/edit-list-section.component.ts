import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-list-section',
  // standalone: true,
  // imports:[],
  templateUrl: './edit-list-section.component.html',
  styleUrls: ['./edit-list-section.component.scss']
})
export class EditListSectionComponent implements OnInit {
  productName:any;
  productPrice:any;
  editedExpense: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.editedExpense)
    this.productName = this.editedExpense.titleOfProduct;
    this.productPrice = this.editedExpense.costOfProduct;
  }
  updateExpenseList(){
  
  }

}
