import { Component,Input } from '@angular/core';
import { Card } from 'src/app/card';

interface Data {
  name: string;
  paragraph: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  data!: Card;
}
