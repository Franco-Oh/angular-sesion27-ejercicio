import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add two numbers, calcular2(num1:number, num2:number, oper:string)', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const data = { val1: 7, val2: 7, oper: '+'};
    const expectedResult = 14;

    const result = app.calcular2(data.val1, data.val2, data.oper);
    expect<any>(result).toEqual(expectedResult);
  })

  it('should subtract two numbers, calcular2(num1:number, num2:number, oper:string)', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const data = { val1: 9, val2: 5, oper: '-'};
    const expectedResult = 4;

    const result = app.calcular2(data.val1, data.val2, data.oper);
    expect<any>(result).toEqual(expectedResult);
  })

  it('should multiply two numbers, calcular2(num1:number, num2:number, oper:string)', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const data = { val1: 5, val2: 6, oper: '*'};
    const expectedResult = 30;

    const result = app.calcular2(data.val1, data.val2, data.oper);
    expect<any>(result).toEqual(expectedResult);
  })

  it('should divide two numbers, calcular2(num1:number, num2:number, oper:string)', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const data = { val1: 24, val2: 4, oper: '/'};
    const expectedResult = 6;

    const result = app.calcular2(data.val1, data.val2, data.oper);
    expect<any>(result).toEqual(expectedResult);
  })
});
