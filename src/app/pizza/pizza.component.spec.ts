import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title 'I love pizza!'`, async(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I love pizza!');
  }));
  it('#clicked() should toggle #isOn', () => {
    fixture = TestBed.createComponent(PizzaComponent);
    let comp = fixture.debugElement.componentInstance;
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    fixture = TestBed.createComponent(PizzaComponent);
    let comp = fixture.debugElement.componentInstance;
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});
