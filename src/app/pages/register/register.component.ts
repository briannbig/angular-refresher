import { Component, signal } from '@angular/core'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  onSubmit ($event: Event) {
    $event.preventDefault()
    if (this.email.valid && this.password.valid && this.password.value === this.confirmPassword.value) {
      this.registerText.set('Register successful')
    } else {
      this.registerText.set('Email and password are invalid')
    }
  }

  registerText = signal('')
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])
  confirmPassword = new FormControl('', [Validators.required])
}
