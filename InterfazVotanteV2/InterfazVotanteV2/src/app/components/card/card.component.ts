import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
  current;
  currenta;
  cont = 1;
  imgcurrent;
  selected: boolean = false;
  @Input() hol: string;
  @Input() CardSubtitle: string;
  @Input() CardTitle: string;
  @Input() ImageCard: string;

  constructor() { }

  colores(){
    this.cont+=1;
    console.log("el valor de cont es "+this.cont)
    if (this.cont % 2 == 0) {
      this.current = "redBg"
      this.currenta = "letras"
      this.imgcurrent = "imgCambio"
      this.selected = true;
      console.log("el valor de cont es "+this.cont)
    }
    else{
      console.log("entro")
      this.current = "normalBg"
      this.currenta = "letrasN"
      this.imgcurrent = "imgcurrent"
      this.selected = false;
    }
    
  }

  ngOnInit() {}

}
