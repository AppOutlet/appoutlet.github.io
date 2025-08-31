import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: 'app-navigation',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
