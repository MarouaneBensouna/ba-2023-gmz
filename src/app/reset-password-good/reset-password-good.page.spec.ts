import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordGoodPage } from './reset-password-good.page';

describe('ResetPasswordGoodPage', () => {
  let component: ResetPasswordGoodPage;
  let fixture: ComponentFixture<ResetPasswordGoodPage>;

  beforeEach(
    (() => {
    fixture = TestBed.createComponent(ResetPasswordGoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
