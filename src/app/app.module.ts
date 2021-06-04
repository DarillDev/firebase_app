import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoymaxModule } from './modules/loymax/loymax.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoymaxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
