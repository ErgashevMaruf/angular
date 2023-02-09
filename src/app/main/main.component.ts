import { Component } from '@angular/core';
import { CARDS } from '../card';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cards = CARDS;
}
