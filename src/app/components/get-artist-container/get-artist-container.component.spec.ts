import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtistContainerComponent } from './get-artist-container.component';

describe('GetArtistContainerComponent', () => {
  let component: GetArtistContainerComponent;
  let fixture: ComponentFixture<GetArtistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArtistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArtistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
