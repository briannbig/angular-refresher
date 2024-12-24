import { Component, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { SpinnerComponent } from '../../components/spinner/spinner.component'
import { Error } from '../../model/error.type'

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb: FormBuilder = inject(FormBuilder)
  auth = inject(AuthService)
  router = inject(Router)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  onSubmit ($event: Event) {
    $event.preventDefault()
    this.isLoading.set(true)

    const rawFormValue = this.loginForm.getRawValue()

    if (this.loginForm.invalid) {
      this.loginText.set('Invalid form')
      this.isLoading.set(false)
      return
    }

    this.auth.login(rawFormValue.email!, rawFormValue.password!).subscribe({
      next: () => {
        this.isLoading.set(false)
        this.loginText.set('Login successful')
        this.router.navigateByUrl('/')
      },
      error: err => {
        this.isLoading.set(false)
        this.err = {
          code: err.code,
          message: err.message
        }
        this.loginText.set('Login failed')
      }
    })
  }

  loginText = signal('')
  isLoading = signal(false)

  err: Error | null = null
}
