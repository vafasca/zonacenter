import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment'

// Inicializa la app de Firebase
const app = initializeApp(environment.firebase);

console.log('Firebase app inicializada:', app);  // Evita que TypeScript marque el error
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
