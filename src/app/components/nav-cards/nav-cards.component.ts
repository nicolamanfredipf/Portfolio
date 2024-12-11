import { BackgroundsService } from './../../services/backgrounds.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-cards',
  templateUrl: './nav-cards.component.html',
  styleUrls: ['./nav-cards.component.scss']
})
export class NavCardsComponent {
  @Input() videoUrl = '/assets/coffee-shop.mp4';
}
