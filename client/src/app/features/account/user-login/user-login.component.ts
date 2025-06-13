import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { AccountService } from '@services/account.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
  ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton

],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private accountService = inject(AccountService)
  loginForm = this.fb.group({
    email:[''],
    password:['']
  })

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe({
      next: response => {
        this.accountService.getUserInfo().subscribe({

          next: ()=>{
            this.router.navigate(['/']);
          }

        })
      }
    })
}
}
