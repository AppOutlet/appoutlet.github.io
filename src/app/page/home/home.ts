import { Component } from '@angular/core';
import { Navigation } from '../../component/navigation/navigation';
import { Footer } from '../../component/footer/footer';
import { Hero } from '../../component/hero/hero';
import { Contact } from '../../component/contact/contact';
import { Services } from '../../component/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navigation, Footer, Hero, Contact, Services],
  templateUrl: './home.html',
})
export class Home {

}