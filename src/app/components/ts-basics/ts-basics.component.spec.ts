import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsBasicsComponent } from './ts-basics.component';

describe('TsBasicsComponent', () => {
  let component: TsBasicsComponent;
  let fixture: ComponentFixture<TsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
