import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayOutModule } from './main-lay-out/main-lay-out.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayOutModule,
    HeaderModule,
    FooterModule,
    SharedModule,
  ],
  exports: [
    MainLayOutModule
  ]
})
export class TemplatesModule { }
