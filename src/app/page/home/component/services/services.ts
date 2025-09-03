import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services = [
    {
      icon: 'developer_mode',
      title: $localize`Custom App Development`,
      description: $localize`Have an idea? We build custom apps for any device (iPhone, Android, Desktop). We focus on getting your product to market quickly with a high-quality and reliable solution.`
    },
    {
      icon: 'design_services',
      title: $localize`UI/UX Design`,
      description: $localize`We design beautiful, modern, and easy-to-use interfaces that your users will love, ensuring your app looks professional and engaging on every screen.`
    },
    {
      icon: 'storefront',
      title: $localize`App Store Marketing`,
      description: $localize`We help your app get discovered. Our team creates eye-catching store assets and compelling descriptions to attract your first users and boost visibility.`
    },
    {
      icon: 'speed',
      title: $localize`Build Acceleration`,
      description: $localize`Speed up your development process. We set up solutions that dramatically reduce build times, allowing your team to test and iterate much faster.`
    },
    {
      icon: 'smart_toy',
      title: $localize`AI-Powered Chatbots`,
      description: $localize`We build smart AI chatbots trained on your company's knowledge. They provide instant, accurate answers to customer questions and support your internal teams.`
    },
    {
      icon: 'verified',
      title: $localize`Software Quality & QA`,
      description: $localize`Launch with confidence. We help you set up robust testing processes to ensure your app is reliable and bug-free, building trust with your users from day one.`
    }
  ];
}