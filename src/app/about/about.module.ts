import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AboutComponent } from './about.component';
import { AboutRutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent, CompanyComponent],
  imports: [
    CommonModule,
    AboutRutingModule
  ]
})
export class AboutModule { }
