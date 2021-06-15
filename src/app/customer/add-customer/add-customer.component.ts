import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  firstname: string = '';
  terms: boolean = false;
  customerType: string = '';
  description: string = '';
  constructor() {}

  ngOnInit(): void {}

  loadValues(formValue: NgForm) {
    let userDetails = {
      firstname: 'Niksan',
      terms: true,
      customerType: '1',
      description: 'Welcome to my form',
    };
    formValue.setValue(userDetails);
  }

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }

  resetForm(formValue: NgForm) {
    // formValue.reset();
    formValue.resetForm();
  }
}
