import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../ionic-auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  items: Observable<any[]>;
  userDetail: string;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    public firestore: AngularFirestore
  ) {
    this.items= this.firestore.collection('biens').valueChanges();
  }

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    });
  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      });
  }

  goToMap(){
    this.router.navigateByUrl('map');
  }
  goToAdd(){
    this.router.navigateByUrl('biens');
  }
}
