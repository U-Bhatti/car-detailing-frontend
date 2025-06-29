import { Component } from '@angular/core';
import {DatePicker} from '../date-picker/date-picker';

@Component({
  selector: 'app-new-customer',
  imports: [DatePicker],
  templateUrl: './new-customer.html',
  standalone: true,
  styleUrl: './new-customer.css'
})
export class NewCustomer {
  registerCustomer() {
    console.log("CUSTOMER IS REGISTERED!")
  }
}
