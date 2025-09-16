import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.html',
})
export class Navigation {
  welcomeMessage = $localize`Welcome to AppOutlet!`;
}