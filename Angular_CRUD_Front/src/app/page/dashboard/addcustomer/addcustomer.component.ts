import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  public customers = [
    { name: 'Saman', address: 'Panadura', salary: 666 },
    { name: 'Sama', address: 'Padura', salary: 1212 },
  ];

  newCustomer = { name: '', address: '', salary: 0 }; 

  addCustomer() {
    if (this.newCustomer.name && this.newCustomer.address && this.newCustomer.salary !== 0) { 
     
      this.customers.push({ ...this.newCustomer });
      this.newCustomer = { name: '', address: '', salary: 0 }; 
    } else {
      alert('Please fill in all fields');
    }
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }
}
