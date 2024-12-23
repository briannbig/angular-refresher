import { Component, inject, OnInit, signal } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from '../../model/group.type';

@Component({
  selector: 'app-groups',
  imports: [],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements OnInit{

  groupService = inject(GroupService)

  groups = signal<Array<Group>>(this.groupService.groups)

  ngOnInit(): void {
    
  }

}
