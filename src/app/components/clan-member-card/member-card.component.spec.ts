import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardComponent } from './member-card.component';

describe('ClanMemberCardComponent', () => {
  let component: MemberCardComponent;
  let fixture: ComponentFixture<MemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
