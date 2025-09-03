import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-our-apps',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './our-apps.html',
  styleUrl: './our-apps.scss'
})
export class OurApps {
  apps = [
    {
      title: "DisCorkie",
      icon: "/image/home/our-apps/discorkie.png",
      summary: $localize`A client for discourse forums.`,
      description: $localize`Your all-in-one client for managing multiple Discourse forums. Enjoy seamless access and real-time updates across Android, iOS, and desktop, keeping all your communities connected in one beautifully designed, cross-platform app.`,
      tags: [`Android`, `iOS`, `Windows`, `Linux`]
    },
    {
      title: "GameOutlet",
      icon: "/image/home/our-apps/gameoutlet.png",
      summary: $localize`Find the best prices on PC games`,
      description: $localize`Find the best prices on PC games with ease. This open-source app aggregates deals from popular online stores, featuring the latest discounts and a handy wishlist. Discover cross-platform availability for Windows, Linux, and macOS.`,
      tags: [`Android`, `iOS`, `Windows`, `Linux`]
    }
  ]
}
