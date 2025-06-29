import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormField, MatInput, MatSuffix} from '@angular/material/input';

@Component({
  selector: 'app-date-picker',
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormField,
    MatInput,
    MatSuffix
  ],
  templateUrl: './date-picker.html',
  standalone: true,
  styleUrl: './date-picker.css'
})
export class DatePicker {
}
