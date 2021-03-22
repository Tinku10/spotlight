import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseContainerComponent } from './new-release-container.component';

describe('NewReleaseContainerComponent', () => {
  let component: NewReleaseContainerComponent;
  let fixture: ComponentFixture<NewReleaseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleaseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
