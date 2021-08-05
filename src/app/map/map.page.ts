import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
 declare let google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map',{static: true}) mapRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.iniMap();
  }

  iniMap(){
    const latLng = new google.maps.LatLng(6.162068, 1.2441342);
    const options = {
      center: latLng,
      zoom: 15
    };
    const map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
