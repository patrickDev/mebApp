import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MebamApiProvider } from '../../providers/mebam-api/mebam-api';


@Component({
  selector: 'page-fond-roulement',
  templateUrl: 'fond-roulement.html',
})
export class FondRoulementPage {
  public users : any; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private mebamApi: MebamApiProvider, 
    public loadingController: LoadingController
    ) {
  }

  ionViewDidLoad() {
   let loader = this.loadingController.create({
     content: 'patienter ...'
   });

   loader.present().then(resolve => {
     this.mebamApi.getUsers().then(data => {
       this.users = data
       loader.dismiss();
     })
   })
   
  }

}
