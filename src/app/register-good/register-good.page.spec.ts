import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterGoodPage } from './register-good.page';

describe('RegisterGoodPage', () => {
  let component: RegisterGoodPage;
  let fixture: ComponentFixture<RegisterGoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterGoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
