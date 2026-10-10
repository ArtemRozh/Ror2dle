import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessComponent } from './endless.component';

describe('EndlessComponent', () => {
  let component: EndlessComponent;
  let fixture: ComponentFixture<EndlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndlessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
