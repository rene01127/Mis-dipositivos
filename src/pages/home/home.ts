import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  Bocina= BocinaPage;
  Smartphone=SmartphonePage;
  Tv=TvPage;
  Lampara=LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  bocina()
  {
    this.navCtrl.push(this.Bocina);
  }
  smartphone()
  {
    this.navCtrl.push(this.Smartphone);
  }
  TV()
  {
    this.navCtrl.push(this.Tv);
  }
  lampara()
  {
    this.navCtrl.push(this.Lampara);
  }




}
