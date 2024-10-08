import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { SeedCatalogComponent } from "./seed-catalog/seed-catalog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, MainPageComponent, SeedCatalogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seed-catalog';
}