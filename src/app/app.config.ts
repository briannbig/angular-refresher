import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection
} from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideAuth, getAuth } from '@angular/fire/auth'

import { routes } from './app.routes'
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser'
import { provideHttpClient } from '@angular/common/http'
import { environment } from '../environments/environment.development'
import { getDatabase, provideDatabase } from '@angular/fire/database'

const firebaseConfig = environment.firebaseConfig

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ]
}
