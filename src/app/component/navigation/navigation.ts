import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LanguageSwitcher],
  templateUrl: './navigation.html',
})
export class Navigation {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}