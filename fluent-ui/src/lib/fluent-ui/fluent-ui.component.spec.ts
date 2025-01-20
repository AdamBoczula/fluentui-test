import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluentUiComponent } from './fluent-ui.component';

describe('FluentUiComponent', () => {
  let component: FluentUiComponent;
  let fixture: ComponentFixture<FluentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluentUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FluentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
