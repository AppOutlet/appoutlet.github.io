import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatIconModule, NgFor],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services = [
    {
      icon: 'developer_mode',
      title: 'Custom App Development',
      description: 'Got a brilliant idea? We’re here to build it. We create tailored mobile and desktop applications that work perfectly across all devices – iPhone, Android, Windows, macOS, or Linux. Our focus is on bringing your product to market efficiently, ensuring it’s high-performing, reliable, and easy to maintain as you grow. Our multiplatform approach means you get wider reach without the overhead of developing for each platform separately.'
    },
    {
      icon: 'design_services',
      title: 'UI/UX Design',
      description: 'First impressions count, especially for new ventures. Our team crafts modern, intuitive, and visually appealing user interfaces that users will love. We ensure your app not only functions flawlessly but also looks professional and engaging across all platforms and screen sizes, helping your brand make a strong impact from day one.'
    },
    {
      icon: 'storefront',
      title: 'App Store Marketing & Asset Creation',
      description: 'Getting discovered is vital for new apps. We create compelling, store-ready assets designed to boost your app’s visibility and attract your first users. This includes custom screenshot designs that highlight key features, consistent branding elements, and persuasive text descriptions that clearly communicate your app’s value, helping you gain crucial initial traction.'
    },
    {
      icon: 'speed',
      title: 'Gradle Caching Server Solutions',
      description: 'As your development team grows, efficiency becomes key. We offer solutions for implementing and managing Gradle Caching servers, helping to significantly accelerate your build times. This means faster iterations, quicker testing, and a more productive development cycle for your team.'
    },
    {
      icon: 'smart_toy',
      title: 'AI Chat Tailored to Business (RAG-Powered)',
      description: 'Innovate your customer service and internal operations without a massive investment. We develop custom AI chat solutions, powered by your company’s unique knowledge base (Retrieval Augmented Generation - RAG). These intelligent chatbots can provide instant, accurate answers to customer queries and support internal teams, enhancing efficiency and scalability from an early stage.'
    },
    {
      icon: 'verified',
      title: 'Software Quality & QA Consulting',
      description: 'Building trust and ensuring your product works flawlessly from the start is non-negotiable. We provide expert consultancy in software quality and quality assurance (QA), helping you establish robust testing processes, identify potential issues early, and ensure your application meets high standards of reliability and performance. For startups, this means launching a product you can be confident in, reducing costly post-launch fixes and building a strong reputation with your users.'
    }
  ];
}