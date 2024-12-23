import { Injectable } from '@angular/core'
import { Group } from '../model/group.type'

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Array<Group> = [
    {
      id: 1,
      name: 'Champions',
      description: 'We are the first champions in savings'
    },
    {
      id: 2,
      name: 'OG\'s',
      description: 'We are the Original Gangsters'
    },
    {
      id: 3,
      name: 'Footbal masters',
      description: 'Supporting football to touch lives'
    },
    {
      id: 4,
      name: 'Angular Coders',
      description: 'We do everything for our passion, our Angular'
    }
  ]

  constructor () {}
}
