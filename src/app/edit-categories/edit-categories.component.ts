import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { StoreService } from '../service/store/Store.service';

@Component({
  selector: 'app-edit-categories',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule],
  templateUrl: './edit-categories.component.html',
  styleUrl: './edit-categories.component.css'
})
export class EditCategoriesComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

}
