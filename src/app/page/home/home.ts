import { Component } from '@angular/core';
import { Hero } from '../../component/hero/hero';
import { Services } from '../../component/services/services';
import { Technology } from '../../component/technology/technology';
import { Portifolio } from '../../component/portifolio/portifolio';
import { Blog } from '../../component/blog/blog';
import { Contact } from '../../component/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Technology, Portifolio, Blog, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
