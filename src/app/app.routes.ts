import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CalculatorComponent } from './pages/calculator/calculator.component'
import { GroupsComponent } from './pages/groups/groups.component'
import { PostsComponent } from './pages/posts/posts.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return HomeComponent
    }
  },
  {
    path: 'calculator',
    loadComponent: () => {
      return CalculatorComponent
    }
  },
  {
    path: 'groups',
    loadComponent: () => {
      return GroupsComponent
    }
  },
  {
    path: 'posts',
    loadComponent: () => {
      return PostsComponent
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
]
