import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockprocessformComponent } from './blockprocessform.component';

describe('BlockprocessformComponent', () => {
  let component: BlockprocessformComponent;
  let fixture: ComponentFixture<BlockprocessformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockprocessformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockprocessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
