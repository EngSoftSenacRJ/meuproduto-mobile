import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesquisaPage } from './pesquisa.page';

describe('PesquisaPage', () => {
  let component: PesquisaPage;
  let fixture: ComponentFixture<PesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
