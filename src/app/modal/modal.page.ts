
import { Component, Input, OnInit } from '@angular/core';
import { Note, DataService } from '../services/data.service';
import { ModalController, ToastController } from '@ionic/angular';
import categoryData from '../../assets/mockdata/categories.json';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id: string;
  note: Note = null;

  categories = categoryData;
  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res => {
      this.note = res;
    });
  }

/*
  dismiss() {
    this.modalCtrl.dismiss();
  }

  */

  async deleteNote() {
    await this.dataService.deleteNote(this.note)
    this.modalCtrl.dismiss();
  }
 
  async updateNote() {
    await this.dataService.updateNote(this.note);
    const toast = await this.toastCtrl.create({
      message: 'Note updated!.',
      duration: 2000
    });
    toast.present();
 
  }
}