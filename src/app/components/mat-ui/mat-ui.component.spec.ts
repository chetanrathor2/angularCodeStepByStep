import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatUiComponent } from './mat-ui.component';

describe('MatUiComponent', () => {
  let component: MatUiComponent;
  let fixture: ComponentFixture<MatUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
