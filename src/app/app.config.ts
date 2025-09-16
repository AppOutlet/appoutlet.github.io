import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, House, Mail, Phone, ClipboardList, Rocket, Github, Linkedin, BookOpen, Store, MessagesSquare, Twitter } from 'lucide-angular';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    importProvidersFrom(LucideAngularModule.pick({ House, Mail, Phone, ClipboardList, Rocket, Github, Linkedin, BookOpen, Store, MessagesSquare, Twitter })),
  ]
};