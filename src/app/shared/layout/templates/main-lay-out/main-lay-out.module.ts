import { SharedModule } from './../../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayOutComponent } from './main-lay-out.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';



@NgModule({
  declarations: [MainLayOutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ]
})
export class MainLayOutModule { }
