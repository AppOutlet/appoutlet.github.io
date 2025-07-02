import { Component } from '@angular/core';
import { Hero } from '../../component/hero/hero';
import { Services } from '../../component/services/services';
import { Technology } from '../../component/technology/technology';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Technology],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
