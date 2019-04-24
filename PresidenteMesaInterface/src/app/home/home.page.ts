import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  emailUser = null;

  constructor(
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.argument = this.activatedRoute.snapshot.paramMap.get('id');
    this.emailUser = this.ActivatedRoute.snapshot.paramMap.get('id');
  }
}
