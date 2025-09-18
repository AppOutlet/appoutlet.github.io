import { Component } from '@angular/core';
import { Contact } from '../../component/contact/contact';
import { Footer } from '../../component/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Contact, Footer],
  templateUrl: './home.html',
})
export class Home {}