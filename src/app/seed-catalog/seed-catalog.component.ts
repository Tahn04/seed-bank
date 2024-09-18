import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seed } from '../seed';

@Component({
  selector: 'app-seed-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seed-catalog.component.html',
  styleUrl: './seed-catalog.component.css'
})
export class SeedCatalogComponent {
  @Input() seed!: Seed;
}