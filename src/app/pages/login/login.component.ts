import { Component, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit ($event: Event) {

    $event.preventDefault()

    if (this.email.valid && this.password.valid) {
      this.loginText.set('Log in successful')
    } else {
      this.loginText.set('Email and password are invalid')
    }
  }

  loginText = signal('')
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])
  
}
