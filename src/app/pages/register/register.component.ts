import { Component, inject, signal } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule,  SpinnerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  fb = inject(FormBuilder)
  auth = inject(AuthService)

 
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  })
 

  onSubmit ($event: Event) {
    $event.preventDefault()
    this.isLoading.set(true)
    const rawFormValue = this.registerForm.getRawValue()
    console.log('raw form value........' ,rawFormValue);
    
    if (rawFormValue.password !== rawFormValue.confirmPassword) {
      this.registerText.set('Password and confirm password do not match')
      this.isLoading.set(false)
      return
    } else {
      this.auth
        .register(rawFormValue.email!, rawFormValue.password!)
        .subscribe(() => {
          this.isLoading.set(false)
          this.registerText.set('Registration successful')
        })
    }
  }

  registerText = signal('')
  isLoading = signal(false)
}
