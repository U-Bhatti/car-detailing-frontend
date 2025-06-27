import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewCustomer} from './new-customer/new-customer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCustomer],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';


}
