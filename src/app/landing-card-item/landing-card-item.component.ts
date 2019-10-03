import { Component, OnInit, Input } from '@angular/core';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-landing-card-item',
  templateUrl: './landing-card-item.component.html',
  styleUrls: ['./landing-card-item.component.css']
})
export class LandingCardItemComponent implements OnInit {
  @Input() color: string;
  @Input() cardIcon: IconProp;
  @Input() cardTitle: string;
  @Input() cardIntro: string;
  constructor() { }

  ngOnInit() {

  }
}
