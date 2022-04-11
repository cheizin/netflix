import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/mockdata/home.json';
import { ModalPage } from '../modal/modal.page';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';
import { DrawerService } from '../services/drawer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GlobalVariable } from '../globals';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private baseApiUrl = GlobalVariable.BASE_API_URL;
  flix_type : any = [];
  flix_title :any = [];

  sections = homeData.sections;
  spotlight = homeData.spotlight;
 
  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController, private drawerService: DrawerService,  public httpClient: HttpClient) 
  {  
    this.httpClient.get(this.baseApiUrl+'flix/category.php').subscribe(
      data =>{
        this.flix_type = data;
      }
    );
  }

  openCategory(id)
  {
    this.httpClient.get(this.baseApiUrl+'flix/home.php?id='+id).subscribe(
      data => {
        this.flix_title = data;
            }
    );
    
  }

  ngOnInit() {

  }
      async openCategories() {
        const modal = await this.modalCtrl.create({
          component: ModalPage,
          cssClass: 'transparent-modal',
          enterAnimation: modalEnterAnimation,
          leaveAnimation: modalLeaveAnimation
        });
     
        await modal.present();
      }
     
      openInfo(series) {
        console.log('title: ', series);
        this.drawerService.openDrawer(series.title);
      }
}