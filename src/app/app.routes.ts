import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CalculatorComponent } from './pages/calculator/calculator.component'
import { GroupsComponent } from './pages/groups/groups.component'
import { PostsComponent } from './pages/posts/posts.component'
import { RegisterComponent } from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component'
import { CreateGroupComponent } from './pages/create-group/create-group.component'

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
    path: 'groups/new',
    loadComponent () {
      return CreateGroupComponent
    }
  },
  {
    path: 'posts',
    loadComponent: () => {
      return PostsComponent
    }
  },
  {
    path: 'register',
    loadComponent: () => {
      return RegisterComponent
    }
  },

  {
    path: 'login',
    loadComponent: () => {
      return LoginComponent
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
]
