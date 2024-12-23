import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";
import { GreetingComponent } from "../../components/greeting/greeting.component";

@Component({
  selector: 'app-calculator',
  imports: [CounterComponent, GreetingComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
