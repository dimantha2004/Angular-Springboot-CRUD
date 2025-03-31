import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/customermodel';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  public customers: Customer[] = [
    new Customer(1, 'Saman', 'Panadura', 666),
    new Customer(2, 'Sama', 'Padura', 1212),
  ];

  newCustomer: Customer = new Customer(0, '', '', 0);
  isEditing: boolean = false;
  editingIndex: number | null = null;

  addOrUpdateCustomer(form: any) {
    if (this.newCustomer.name && this.newCustomer.address && this.newCustomer.salary > 0) {
      if (this.isEditing && this.editingIndex !== null) {
        
        this.customers[this.editingIndex] = { ...this.newCustomer };
        this.isEditing = false;
        this.editingIndex = null;
      } else {
        
        this.newCustomer.id = this.customers.length ? this.customers[this.customers.length - 1].id + 1 : 1;
        this.customers.push(new Customer(this.newCustomer.id, this.newCustomer.name, this.newCustomer.address, this.newCustomer.salary));
      }
      form.resetForm();
      this.newCustomer = new Customer(0, '', '', 0);
    } else {
      alert('Please fill in all fields');
    }
  }

  editCustomer(index: number) {
    this.newCustomer = { ...this.customers[index] };
    this.isEditing = true;
    this.editingIndex = index;
  }

  deleteCustomer(index: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customers.splice(index, 1);
    }
  }
}
