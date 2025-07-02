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
    name: "Kotlin Multiplatform",
    title: "Cross-Platform Development",
    description: "We use Kotlin Multiplatform to build one app that works perfectly on phones, tablets, and computers.",
    benefit: "Save time and money with one codebase"
  },
  {
    icon: "ph-hard-drives",
    name: "Ktor & SpringBoot",
    title: "Reliable Backend Systems",
    description: "Your app is powered by Ktor and SpringBoot server technology that ensures fast performance and can handle growth as your business scales.",
    benefit: "Fast, scalable, and always available"
  },
  {
    icon: "ph-cloud",
    name: "Firebase",
    title: "Secure Cloud Services",
    description: "We use Firebase cloud platform to keep your data safe, manage user accounts, and provide real-time features.",
    benefit: "Enterprise-grade security and reliability"
  },
  {
    icon: "ph-chart-line-up",
    name: "Google Analytics",
    title: "Analytics & Insights",
    description: "Built-in Google Analytics tracking helps you understand how users interact with your app, so you can make data-driven improvements.",
    benefit: "Understand your users better"
  },
  {
    icon: "ph-shield-check",
    name: "GitHub",
    title: "Version Control & Backup",
    description: "Every change to your app is safely tracked and backed up with GitHub, ensuring we can always restore or update your application.",
    benefit: "Your code is always safe and recoverable"
  },
  {
    icon: "ph-chart-pie-slice",
    name: "Umami",
    title: "Privacy-Focused Analytics",
    description: "We use Umami analytics tools that give you insights while protecting your users' personal information.",
    benefit: "Insights without compromising privacy"
  }
];
}
