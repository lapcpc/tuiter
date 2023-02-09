import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitformComponent } from './tuitform.component';

describe('TuitformComponent', () => {
  let component: TuitformComponent;
  let fixture: ComponentFixture<TuitformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuitformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
