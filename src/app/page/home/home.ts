import { Component } from '@angular/core';
import { Hero } from './component/hero/hero';
import { Services } from './component/services/services';

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
