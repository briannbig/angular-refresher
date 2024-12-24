import { Component, computed, inject, OnInit, signal } from '@angular/core'
import { FirebaseDbService } from '../../services/firebase-db.service'
import { Group } from '../../model/group.interface'

@Component({
  selector: 'app-groups',
  imports: [],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements OnInit {
  groupService = inject(FirebaseDbService)



  groups = signal<Group[]>([])

  ngOnInit (): void {
    this.groupService.getAllGroups()
    .subscribe({
      next: (groups) => {
        this.groups.set(groups)
      },
      error: err => {
        console.error('Error fetching groups', err)
        return []
      }
    })
  }
}
