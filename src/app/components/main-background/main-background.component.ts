import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-background',
  templateUrl: './main-background.component.html',
  styleUrls: ['./main-background.component.scss']
})
export class MainBackgroundComponent {

  @Input() videoUrl = '/assets/coffee-shop.mp4';

}
