import { Component, computed, inject, input, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { Error } from '../../model/error.type'

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  auth = inject(AuthService)

  title = input('Chama Angular')
  isLoading = signal(false)
  err: Error | null = null
  
  isLoggedin = computed(() => this.auth.currentUser() !== null)

  logout () {
    this.isLoading.set(true)
    this.auth.logout().subscribe({
      error: err => {
        err = {
          code: err.code,
          message: err.message
        }
      },
      complete: () => {
        this.isLoading.set(false)
      }
    })
  }
}
