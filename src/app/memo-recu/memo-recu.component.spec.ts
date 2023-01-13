import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoRecuComponent } from './memo-recu.component';

describe('MemoRecuComponent', () => {
  let component: MemoRecuComponent;
  let fixture: ComponentFixture<MemoRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
