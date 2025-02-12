import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  imports: [ CommonModule, DividerModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    username: string = '';
    password: string = '';
  
    constructor(private router: Router) {}
    
    register() {
      this.router.navigate(['/dashboard']);
    }
}
