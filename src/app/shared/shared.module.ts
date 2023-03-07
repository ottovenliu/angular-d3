import { NgModule } from '@angular/core';

// 一般及第三方匯入
import { GeneralAndThirdPartyModule } from './general-and-third-party.module';



@NgModule({
  imports: [
    // 一般及第三方匯入
    GeneralAndThirdPartyModule,
  ],
  exports: [
    // 一般及第三方匯入
    GeneralAndThirdPartyModule,
  ],
})
export class SharedModule { }
