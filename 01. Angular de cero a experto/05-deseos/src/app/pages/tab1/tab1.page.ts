import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas: Lista[] = [];
  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {
  }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          //
          handler: ( data ) => {
            if (data.titulo) {
              console.log(data);
              const listaId = this.deseosService.crearLista(data.titulo);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

            }
          }
        }
      ]
    });

    await alert.present();
  }

}
