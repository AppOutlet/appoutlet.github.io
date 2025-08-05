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
      title: $localize`Custom App Development`,
      description:
        $localize`We build tailored mobile and desktop applications that work perfectly on all devices, ensuring your users get the same great experience whether they're on iPhone, Android, or computer.`,
      features: [
        $localize`Works on all devices`,
        $localize`Fast and reliable`,
        $localize`Easy to maintain`,
        $localize`Future-proof technology`,
      ],
    },
    {
      icon: 'ph-palette',
      title: $localize`UI/UX Design`,
      description:
        $localize`Creating beautiful and intuitive user interfaces that your customers will love to use, while ensuring everything works smoothly across all platforms and devices.`,
      features: [
        $localize`User-friendly design`,
        $localize`Modern and clean look`,
        $localize`Works on any screen size`,
        $localize`Accessible for everyone`,
      ],
    },
    {
      icon: 'ph-trend-up',
      title: $localize`App Store Marketing`,
      description:
        $localize`Professional screenshot design and marketing materials that showcase your app's best features and help increase downloads from app stores.`,
      features: [
        $localize`Eye-catching screenshots`,
        $localize`Higher download rates`,
        $localize`Professional presentation`,
        $localize`Consistent branding`,
      ],
    },
  ];
}
