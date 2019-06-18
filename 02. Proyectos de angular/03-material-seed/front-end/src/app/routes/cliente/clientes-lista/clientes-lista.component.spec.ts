import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListaComponent } from './clientes-lista.component';

describe('ClienteComponent', () => {
  let component: ClientesListaComponent;
  let fixture: ComponentFixture<ClientesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
