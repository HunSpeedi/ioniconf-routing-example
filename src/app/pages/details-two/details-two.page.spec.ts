import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsTwoPage } from './details-two.page';

describe('DetailsPage', () => {
  let component: DetailsTwoPage;
  let fixture: ComponentFixture<DetailsTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
