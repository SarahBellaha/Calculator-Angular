import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  templateUrl: './calculatrice-component.component.html',
  styleUrls: ['./calculatrice-component.component.css']
})
export class CalculatriceComponentComponent implements OnInit {

  result: number | string = 0;
  firstValue: Array<number | string> = [];
  secondValue: Array<number | string> = [];
  operator: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  reset():void {
    this.result = 0;
    this.firstValue = [];
    this.secondValue = [];
    this.operator = null;
  }

  calculate():void {
    switch(this.operator) {
      case "+":
        this.result = Number(this.firstValue.join("")) + Number(this.secondValue.join(""));
      break;

      case "-":
        this.result = Number(this.firstValue.join("")) - Number(this.secondValue.join(""));
      break;

      case "/":
        this.result = Number(this.firstValue.join("")) / Number(this.secondValue.join(""));
      break;

      case "*":
        this.result = Number(this.firstValue.join("")) * Number(this.secondValue.join(""));
      break;        
    }
  }

  percentage(): void{
    if(this.operator !== null) {
      if(this.operator === "+" || this.operator === "-") {
        const percentage: number = Number(this.firstValue.join("")) * (Number(this.secondValue.join("")) / 100);
        this.secondValue = [percentage];
        this.displayValue();
      } else {
        const percentage: number = Number(this.secondValue.join("")) / 100;
        this.secondValue = [percentage];
        this.displayValue();
      }
      
    } else {
      this.reset();
    }
  }

  getValue(value: number | string): void {
    if(this.operator === null) {
      this.firstValue.push(value);
      this.result = this.firstValue.join("");
    } else if(this.operator !== null) {
      this.secondValue.push(value);
      this.result = this.secondValue.join("");
    }
  }

  getOperator(operator: string): void {
    this.operator = operator;
  }

  displayValue(): void {
    this.calculate();
    this.firstValue = [this.result];
    this.secondValue = [];
  }
}
