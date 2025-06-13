import { JsonPipe } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { AccountService } from '@services/account.service';
import { TextInputComponent } from 'app/shared/components/text-input/text-input.component';

@Component({
  selector: 'app-account-registration',
  standalone: true,
  imports: [ ReactiveFormsModule,
      MatCard,
      MatFormField,
      MatLabel,
      MatInput,
      MatButton,
      JsonPipe,
      MatError,
      TextInputComponent],
  templateUrl: './account-registration.component.html',
  styleUrl: './account-registration.component.scss'
})
export class AccountRegistrationComponent {
  private fb = inject(FormBuilder)
  private accountService = inject(AccountService)
  private router = inject(Router);
  validationErrors?: string[];
  registerationForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    password:['']
  })

  btnRegister(){
    this.accountService.register(this.registerationForm.value).subscribe({
      next:response=>{
        this.router.navigateByUrl('/account/login');
      }
      ,
      error: errors=> this.validationErrors = errors
      
    })
   }
}
