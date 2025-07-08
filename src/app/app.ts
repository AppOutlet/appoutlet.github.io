import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './component/nav/nav';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'appoutlet.github.io';
}
