import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  })

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
