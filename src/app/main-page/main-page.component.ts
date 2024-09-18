import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedCatalogComponent } from '../seed-catalog/seed-catalog.component';
import { SeedService } from '../seed.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, SeedCatalogComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  seedCatalogList: Seed[] = [];

  constructor(private seedService: SeedService) {
    this.seedService.getSeeds().subscribe((seeds) => {
      this.seedCatalogList = seeds;
    });
  }
}

  // seeds: any[] = [];
  // filteredSeeds: any[] = [];

  // constructor(private seedService: SeedService) {
  //   this.fetchSeeds();
  // }

  // fetchSeeds() {
  //   this.seedService.getSeeds().subscribe((seeds) => {
  //     this.seeds = seeds;
  //     this.filteredSeeds = seeds;
  //   });
  // }