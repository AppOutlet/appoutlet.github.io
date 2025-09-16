import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Navigation } from '../../component/navigation/navigation';
import { Footer } from '../../component/footer/footer';
import { Hero } from '../../component/hero/hero';
import { Contact } from '../../component/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, Navigation, Footer, Hero, Contact],
  templateUrl: './home.html',
})
export class Home {

}