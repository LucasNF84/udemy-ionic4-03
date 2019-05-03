import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(
              public alertController: AlertController,
              public alertController2: AlertController
              )
  {
    this.titulo = 'Alert Page';
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón Cancelar');
          }
        }, {
          text: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
    ]
    });
    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController2.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'título'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
            this.titulo = data.name1;

          }
        }
      ]
    });

    await alert.present();
  }



}