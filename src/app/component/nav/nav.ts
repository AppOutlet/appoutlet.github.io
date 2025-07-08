import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  isActive = false;

  toogleActive() {
    this.isActive = !this.isActive;
  }

  defaultLanguage: Language = { name: '🇬🇧 En', baseHref: '' };
  availableTranslation: Language[] = [{ name: '🇧🇷 Pt', baseHref: '/pt/' }];

  get selectedLanguage(): Language {
    const currentHref = window.location.href;
    const found = this.availableTranslation.find(lang => currentHref.includes(lang.baseHref) && lang.baseHref);
    return found || this.defaultLanguage;
  }

  onLanguageClick(language: Language) {
    const { origin } = window.location;
    const targetDestination = origin + language.baseHref;
    console.log('Navigating to:', targetDestination);
    window.location.href = targetDestination
  }
}

interface Language {
  name: string;
  baseHref: string;
}
