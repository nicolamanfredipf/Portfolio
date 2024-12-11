import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService {
  
  imgUrls = [
    '/assets/coffee-shop.mp4',
    '/assets/rain-train.mp4'
  ];

}
