import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headermenu = [
    {name: 'Home', link: '#'},
    {name: 'Servises', link: '#'},    
    {name: 'Articles', link: '#'},    
    {name: 'Slients', link: '#'},    
    {name: 'Contacts', link: '#'},
    {name: 'Join us', link: '#'},    
  ]
  
}
