import { computed, inject, Injectable } from '@angular/core'

import {
  Database,
  DatabaseReference,
  getDatabase,
  onValue,
  push,
  ref,
  set
} from '@angular/fire/database'
import { from, Observable } from 'rxjs'
import { Group } from '../model/group.interface'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {
  private db: Database = getDatabase()
  private authService = inject(AuthService)

  private path = 'chama-groups/'
  private groupsRef: DatabaseReference = ref(this.db, this.path)

  private currentUser = computed(() => this.authService.currentUser())

  getAllGroups (): Observable<Group[]> {
    const groups: Group[] = []

    onValue(this.groupsRef, snapshot => {
      snapshot.forEach(child => {
        groups.push(child.val())
      })
    })

    return from([groups])
  }

  createGroup (name: string, description?: string) {
    if (!this.currentUser) {
      throw new Error('User not logged in')
    }

    const newGroupRef =  push(this.groupsRef)

    const group: Group = {
      id: newGroupRef.key!,
      name,
      description,
      createdBy: this.currentUser()?.uid
    }

    const p = set(newGroupRef, group)
    return from(p)
  }
}
