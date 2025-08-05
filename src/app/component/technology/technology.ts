import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
  styleUrl: './technology.scss'
})
export class Technology {
  technologies = [
  {
    icon: "ph-devices",
    name: `Kotlin Multiplatform`,
    title: $localize`Cross-Platform Development`,
    description: $localize`We use Kotlin Multiplatform to build one app that works perfectly on phones, tablets, and computers.`,
    benefit: $localize`Save time and money with one codebase`
  },
  {
    icon: "ph-hard-drives",
    name: `Ktor & SpringBoot`,
    title: $localize`Reliable Backend Systems`,
    description: $localize`Your app is powered by Ktor and SpringBoot server technology that ensures fast performance and can handle growth as your business scales.`,
    benefit: $localize`Fast, scalable, and always available`
  },
  {
    icon: "ph-cloud",
    name: `Firebase`,
    title: $localize`Secure Cloud Services`,
    description: $localize`We use Firebase cloud platform to keep your data safe, manage user accounts, and provide real-time features.`,
    benefit: $localize`Enterprise-grade security and reliability`
  },
  {
    icon: "ph-chart-line-up",
    name: `Google Analytics`,
    title: $localize`Analytics & Insights`,
    description: $localize`Built-in Google Analytics tracking helps you understand how users interact with your app, so you can make data-driven improvements.`,
    benefit: $localize`Understand your users better`
  },
  {
    icon: "ph-shield-check",
    name: `GitHub`,
    title: $localize`Version Control & Backup`,
    description: $localize`Every change to your app is safely tracked and backed up with GitHub, ensuring we can always restore or update your application.`,
    benefit: $localize`Your code is always safe and recoverable`
  },
  {
    icon: "ph-chart-pie-slice",
    name: `Umami`,
    title: $localize`Privacy-Focused Analytics`,
    description: $localize`We use Umami analytics tools that give you insights while protecting your users' personal information.`,
    benefit: $localize`Insights without compromising privacy`
  }
];
}
