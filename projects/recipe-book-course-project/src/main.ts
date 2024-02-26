console.log("FILE: main.ts roudou: ", Date.now())
console.log("A inicialização de tudo vai acontecer: ", Date.now())

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
