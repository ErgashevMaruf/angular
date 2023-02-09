import { Component,Input } from '@angular/core';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input()
  cards!: Card[];
}
