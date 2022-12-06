import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoutiqueService } from './boutique.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BoutiqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
