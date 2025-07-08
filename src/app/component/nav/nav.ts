import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var window: any; // To avoid TypeScript errors for window usage

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements AfterViewInit {
  isActive = false;

  toogleActive() {
    this.isActive = !this.isActive;
  }

  defaultLanguage: Language = { name: '🇬🇧 Eng', baseHref: '' };
  availableTranslation: Language[] = [{ name: '🇧🇷 Por', baseHref: '/pt/' }];
  selectedLanguage: Language = this.defaultLanguage;

  ngAfterViewInit() {
    this.selectedLanguage = this.updateSelectedLanguage();
  }

  private updateSelectedLanguage(): Language {
    const match = this.availableTranslation.find((lang) =>
      window.location.href.includes(lang.baseHref)
    );
    return match || this.defaultLanguage;
  }
}

interface Language {
  name: string;
  baseHref: string;
}
