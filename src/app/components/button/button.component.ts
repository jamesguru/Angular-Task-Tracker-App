import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() title!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  @Input() product!: string;


  onClick = () => {


   this.btnClick.emit();

  }

  onSubmit(){


  }

  

  toggleAddTask():any{


    console.log("toggle");

    console.warn('toggle');
  }

  constructor() { 


   
  }

  ngOnInit(): void {

    
  }

}
