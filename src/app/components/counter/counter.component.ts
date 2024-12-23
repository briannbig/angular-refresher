import { Component, computed, signal } from '@angular/core'
import { HighlightDirective } from '../../directives/highlight.directive'

@Component({
  selector: 'app-counter',
  imports: [HighlightDirective],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = signal(0)

  rewardValue = computed(() => {
    return Math.max(this.counterValue() * 3.5, 0)
  })

  increment () {
    this.counterValue.set(this.counterValue() + 1)
  }
  decrement () {
    this.counterValue.update(val => val - 1)
  }
  reset () {
    this.counterValue.set(0)
  }
}
