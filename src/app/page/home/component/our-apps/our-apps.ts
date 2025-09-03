import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngFor
import { MatButtonModule } from '@angular/material/button'; // For the CTA button
import { MatIconModule } from '@angular/material/icon'; // For platform icons
import { RouterModule } from '@angular/router'; // For routerLink directive

interface AppItem {
  name: string;
  description: string;
  platforms: string[]; // e.g., 'android', 'ios', 'desktop', 'windows', 'linux', 'macos'
  icon?: string; // Optional icon for the app itself
}

@Component({
  selector: 'app-our-apps',
  standalone: true, // Mark as standalone component
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule], // Import necessary modules
  templateUrl: './our-apps.html',
  styleUrl: './our-apps.scss'
})
export class OurApps {
  apps: AppItem[] = [
    {
      name: 'DisCorkie',
      description: 'Your all-in-one client for managing multiple Discourse forums. Enjoy seamless access and real-time updates across Android, iOS, and desktop, keeping all your communities connected in one beautifully designed, cross-platform app.',
      platforms: ['android', 'ios', 'desktop'],
      icon: 'forum' // Example Material Icon
    },
    {
      name: 'GameOutlet',
      description: 'Find the best prices on PC games with ease. This open-source app aggregates deals from popular online stores, featuring the latest discounts and a handy wishlist. Discover cross-platform availability for Windows, Linux, and macOS.',
      platforms: ['windows', 'linux', 'macos'],
      icon: 'videogame_asset' // Example Material Icon
    }
  ];

  moreProjectsText: string = 'And these are not the only projects from AppOutlet!';
  ctaText: string = 'Explore All Our Projects';
  ctaLink: string = '/projects'; // Assuming a /projects route exists for all projects

  /**
   * Returns the appropriate Material Icon name for a given platform string.
   * @param platform The platform name (e.g., 'android', 'ios', 'windows').
   * @returns The Material Icon string.
   */
  getPlatformIcon(platform: string): string {
    switch (platform) {
      case 'android':
        return 'android';
      case 'ios':
      case 'macos': // Both iOS and macOS can use the Apple icon
        return 'apple';
      case 'desktop':
      case 'windows': // General desktop or Windows specific
        return 'desktop_windows';
      case 'linux':
        return 'linux';
      default:
        return 'devices'; // Generic device icon for unknown platforms
    }
  }
}