import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  isActive = false;

  toogleActive() {
    this.isActive = !this.isActive;
  }
}
