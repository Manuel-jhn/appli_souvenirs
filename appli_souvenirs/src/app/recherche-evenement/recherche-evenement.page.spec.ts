import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheEvenementPage } from './recherche-evenement.page';

describe('RechercheEvenementPage', () => {
  let component: RechercheEvenementPage;
  let fixture: ComponentFixture<RechercheEvenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEvenementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
