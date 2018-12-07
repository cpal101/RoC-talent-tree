
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainSideComponent } from './main-side.component';

describe('MainSideComponent', () => {
  let component: MainSideComponent;
  let fixture: ComponentFixture<MainSideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MainSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
