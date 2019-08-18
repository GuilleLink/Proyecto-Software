import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  DPI: string;
  Nombre: string;
  Empadronado: string;
  Mesa: string;
  Centro: string;

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.DPI = data.DPI;
  		this.Nombre = data.Nombre;
      this.Empadronado = data.Empadronado;
      this.Mesa = data.Mesa;
      this.Centro = data.Centro;
  		console.log(data);
  	});
  }

}
