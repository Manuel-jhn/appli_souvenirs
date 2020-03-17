import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadeDeZinebPage } from './pade-de-zineb.page';

describe('PadeDeZinebPage', () => {
  let component: PadeDeZinebPage;
  let fixture: ComponentFixture<PadeDeZinebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadeDeZinebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadeDeZinebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
