import { Component } from '@angular/core';
import { apps } from '../../data/apps';

@Component({
  selector: 'app-portifolio',
  imports: [],
  templateUrl: './portifolio.html',
  styleUrl: './portifolio.scss',
})
export class Portifolio {
  projects = apps;
}
