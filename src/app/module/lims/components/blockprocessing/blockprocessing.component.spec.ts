import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockprocessingComponent } from './blockprocessing.component';

describe('BlockprocessingComponent', () => {
  let component: BlockprocessingComponent;
  let fixture: ComponentFixture<BlockprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockprocessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
