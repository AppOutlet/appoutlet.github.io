import { Component } from '@angular/core';

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
        'A modern communication application that enhances your chat experience with improved features and a clean, user-friendly interface that works seamlessly across all devices.',
      tech: ['Cross-platform', 'Modern Design', 'Real-time Chat'],
      link: 'https://discorkie.appoutlet.dev',
      linkText: 'Visit DisCorkie',
      linkIcon: 'ph-globe',
      status: 'Published',
    },
    {
      title: 'GameOutlet',
      description:
        'An open-source gaming platform that demonstrates our expertise in creating engaging applications with shared functionality across mobile and desktop platforms.',
      tech: ['Gaming Platform', 'Open Source', 'Multi-device'],
      link: 'https://github.com/AppOutlet/GameOutlet#readme',
      linkText: 'View on GitHub',
      linkIcon: 'ph-github-logo',
      status: 'Open Source',
    },
  ];
}
