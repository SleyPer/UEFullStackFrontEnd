import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoutiqueService } from './boutique.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BoutiqueComponent } from './boutique/boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [BoutiqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
