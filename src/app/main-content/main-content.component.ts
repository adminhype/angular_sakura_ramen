import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { OurMenuComponent } from '../our-menu/our-menu.component';
import { HowToOrderComponent } from '../how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  imports: [LandingPageComponent, OurMenuComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
