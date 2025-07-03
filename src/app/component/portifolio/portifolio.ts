import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-portifolio',
  imports: [],
  templateUrl: './portifolio.html',
  styleUrl: './portifolio.scss',
})
export class Portifolio {
  projects = [
    {
      title: 'DisCorkie',
      description:
        'All-in-one client for managing multiple Discourse forums. Enjoy seamless access and real-time updates across Android, desktop, and soon, iOS, keeping all your communities connected in one intuitive app.',
      tech: ['Cross-platform', 'Modern Design', 'Community engagement'],
      link: 'https://discorkie.appoutlet.dev',
      linkText: 'Visit DisCorkie',
      linkIcon: 'ph-globe',
      status: 'Published',
      logo: 'image/portifolio/discorkie.png',
    },
    {
      title: 'GameOutlet',
      description:
        'Find the best prices on PC games. It aggregates deals from popular online stores, featuring latest deals and a wishlist.Discover cross-platform availability for Windows, Linux, and macOS.',
      tech: ['Gaming Platform', 'Open Source', 'Multi-device'],
      link: 'https://github.com/AppOutlet/GameOutlet#readme',
      linkText: 'View on GitHub',
      linkIcon: 'ph-github-logo',
      status: 'Open Source',
      logo: 'image/portifolio/gameoutlet.png',
    },
  ];

  libraries = [
    {
      name: 'umami-kotlin',
      description:'umami-kotlin is an open-source Kotlin Multiplatform SDK for Umami web analytics. It offers type-safe, asynchronous event processing for efficient integration. Use it to add privacy-centric analytics to your applications',
      link: 'https://umami-kotlin.appoutlet.dev'
    }
  ]
}
