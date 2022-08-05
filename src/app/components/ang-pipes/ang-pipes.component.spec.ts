import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngPipesComponent } from './ang-pipes.component';

describe('AngPipesComponent', () => {
  let component: AngPipesComponent;
  let fixture: ComponentFixture<AngPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
