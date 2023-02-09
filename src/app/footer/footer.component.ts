import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footermenu = [
    {name: 'About Us', link: '#'},
    {name: 'Contact Us', link: '#'},    
    {name: 'Privacy Policy', link: '#'},    
    {name: 'Terms Condition', link: '#'}   
  ]
}
