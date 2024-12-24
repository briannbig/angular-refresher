import { inject, Injectable, signal } from '@angular/core'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  user
} from '@angular/fire/auth'
import { from, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseAuth = inject(Auth)
  currentUser = signal<User | null>(null)

  constructor () {
    user(this.firebaseAuth).subscribe(this.currentUser.set)
  }

  getCurrentUser () {
    return this.currentUser
  }

  isLoggedIn () {
    return this.currentUser !== null
  }

  register (email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(response => updateProfile(response.user, { displayName: email }))

    return from(promise)
  }

  login (email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {})
    return from(promise)
  }

  logout (): Observable<void> {
    return from(this.firebaseAuth.signOut())
  }
}
