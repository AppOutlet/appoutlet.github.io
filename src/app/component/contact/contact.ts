import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  processSteps = [
    {
      title: $localize`Initial Contact`,
      description: $localize`Reach out via email or social media`,
    },
    {
      title: $localize`Discovery Call`,
      description: $localize`We discuss your vision and requirements`,
    },
    {
      title: $localize`Project Proposal`,
      description: $localize`Detailed timeline, scope, and pricing`,
    },
    {
      title: $localize`Development & Launch`,
      description: $localize`Agile development with regular updates`,
    },
  ];

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
  ];
}
