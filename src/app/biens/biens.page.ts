import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.page.html',
  styleUrls: ['./biens.page.scss'],
})
export class BiensPage implements OnInit {
  nom: string;
  ville: string;
  description: string;
  latitude: string;
  longitude: string;
  date = new Date();
  constructor(
    private router: Router,
  public firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }
  goToSend(){

    this.firestore.collection('biens').add({
      nom:this.nom,
      ville:this.ville,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      dateAjout: this.date
    });

    this.router.navigateByUrl('dashboard');
  }
  goToReset(){
    this.router.navigateByUrl('dashboard');
  }

}
