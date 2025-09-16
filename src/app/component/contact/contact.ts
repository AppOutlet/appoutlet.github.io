import { Component } from '@angular/core';
import { LucideAngularModule, Mail, MessageCircle, X, Mastodon, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  // No component logic needed for this static contact section
}