import { Component, inject, signal } from '@angular/core'
import { FirebaseDbService } from '../../services/firebase-db.service'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Error } from '../../model/error.type'
import { Router } from '@angular/router'
import { SpinnerComponent } from '../../components/spinner/spinner.component'

@Component({
  selector: 'app-create-group',
  imports: [ReactiveFormsModule, SpinnerComponent],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent {
  private db = inject(FirebaseDbService)

  private fb: FormBuilder = inject(FormBuilder)

  private router = inject(Router)

  isLoading = signal(false)
  resultMessage = signal('')
  creationError: Error | null = null

  createGroupForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  })

  onSubmit ($event: Event) {
    $event.preventDefault()
    this.isLoading.set(true)

    if (this.createGroupForm.invalid) {
      this.resultMessage.set('Please fill in all fields')
      this.isLoading.set(false)
      return
    }

    const rawValue = this.createGroupForm.getRawValue()

    this.db.createGroup(rawValue.name, rawValue.description).subscribe({
      error: err => {
        this.resultMessage.set('An error occurred while creating the group')
        this.creationError = {
          code: err.code,
          message: err.message
        }
        this.isLoading.set(false)
      },
      complete: () => {
        this.resultMessage.set('Group created successfully')
        this.isLoading.set(false)
        this.router.navigateByUrl('/groups')
      }
    })
  }
}
