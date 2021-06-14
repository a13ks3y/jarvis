import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsComponent } from './elements.component';

describe('ElementsComponent', () => {
  let component: ElementsComponent;
  let fixture: ComponentFixture<ElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a list of elements', ()=> {
    expect(component.elements).toBeDefined();
    expect(component.elements.length).toEqual(119);
  });

  it('should has a list of all compounds', () => {
    expect(component.compounds).toBeDefined();
    expect(component.compounds.length).toEqual(119 ** 2);
  });

  it('should show all compounds in grid', () => {
    const compoundElements = fixture.nativeElement.querySelectorAll('.compound');
    expect(compoundElements.length).toEqual(119 ** 2);
  })

});
