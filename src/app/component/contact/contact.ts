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
      title: 'Initial Contact',
      description: 'Reach out via email or social media',
    },
    {
      title: 'Discovery Call',
      description: 'We discuss your vision and requirements',
    },
    {
      title: 'Project Proposal',
      description: 'Detailed timeline, scope, and pricing',
    },
    {
      title: 'Development & Launch',
      description: 'Agile development with regular updates',
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
