import { Component } from '@angular/core';
import { apps } from '../../data/apps';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year: number = new Date().getFullYear();
  socialLinks = [
    {
      title: 'X (Twitter)',
      url: 'https://x.com/AppOutletTeam',
      icon: 'ph-x-logo',
    },
    {
      title: 'Threads',
      url: 'https://x.com/appoutlet',
      icon: 'ph-threads-logo',
    },
    {
      title: 'Mastodon',
      url: 'https://mastodon.social/@AppOutlet',
      icon: 'ph-mastodon-logo',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/appoutlet/',
      icon: 'ph-linkedin-logo',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/app.outlet/',
      icon: 'ph-instagram-logo',
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@AppOutletTeam',
      icon: 'ph-youtube-logo',
    },
  ];

  apps = apps

  links = [
    { icon: 'ph-briefcase', name: 'Our services', url: '#services' },
    { icon: 'ph-folder-open', name: 'Portifolio', url: '#portifolio' },
    { icon: 'ph-note', name: 'Blog', url: '#blog' },
    { icon: 'ph-envelope', name: 'Contact', url: '#contact' },
    { icon: 'ph-github-logo', name: 'GitHub', url: 'https://github.com/app-outlet' }
  ];
}
