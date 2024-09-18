import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedCatalogComponent } from './seed-catalog.component';

describe('SeedCatalogComponent', () => {
  let component: SeedCatalogComponent;
  let fixture: ComponentFixture<SeedCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
