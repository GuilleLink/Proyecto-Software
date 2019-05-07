import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';
import {TaskI} from '../models/task.interface';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-alcaldes',
  templateUrl: './alcaldes.page.html',
  styleUrls: ['./alcaldes.page.scss'],
})
export class AlcaldesPage implements OnInit {
  alcaldes: TaskI[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAlcaldes().subscribe((res)=> {
      console.log('Alcaldes',res);
      this.alcaldes = res;
    });
  }

}
