import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirmacion-voto',
  templateUrl: './confirmacion-voto.page.html',
  styleUrls: ['./confirmacion-voto.page.scss'],
})
export class ConfirmacionVotoPage implements OnInit {

  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    let datapresi = this.activeRoute.snapshot.paramMap.get('presidente');
    console.log(datapresi);
  }

}
