import { Component } from '@angular/core';
import { Hero } from './component/hero/hero';
import { Services } from './component/services/services';
import { OurApps } from './component/our-apps/our-apps';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, OurApps],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
