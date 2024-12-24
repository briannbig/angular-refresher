import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  private auth  = inject(AuthService)


  username = computed( () => this.auth.currentUser()?.displayName || 'there!')

}
