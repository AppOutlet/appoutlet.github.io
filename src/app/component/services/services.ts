import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      icon: 'ph-code',
      title: 'Custom App Development',
      description:
        "We build tailored mobile and desktop applications that work perfectly on all devices, ensuring your users get the same great experience whether they're on iPhone, Android, or computer.",
      features: [
        'Works on all devices',
        'Fast and reliable',
        'Easy to maintain',
        'Future-proof technology',
      ],
    },
    {
      icon: 'ph-palette',
      title: 'UI/UX Design',
      description:
        'Creating beautiful and intuitive user interfaces that your customers will love to use, while ensuring everything works smoothly across all platforms and devices.',
      features: [
        'User-friendly design',
        'Modern and clean look',
        'Works on any screen size',
        'Accessible for everyone',
      ],
    },
    {
      icon: 'ph-trend-up',
      title: 'App Store Marketing',
      description:
        "Professional screenshot design and marketing materials that showcase your app's best features and help increase downloads from app stores.",
      features: [
        'Eye-catching screenshots',
        'Higher download rates',
        'Professional presentation',
        'Consistent branding',
      ],
    },
  ];
}
