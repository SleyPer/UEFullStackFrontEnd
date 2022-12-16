import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Boutique } from './boutique';
import { BoutiqueService } from './boutique.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title: String = "UEFullStackProjectApp"

  public boutiques: Boutique[] | undefined;

  constructor(private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    this.getBoutiques();
  }

  public getBoutiques(): void {
    this.boutiqueService.getBoutiques().subscribe(
      {
        next: (response: Boutique[]) => {
          this.boutiques = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
    );
  }

  /*public onAddBoutique(addForm : NgForm): void {
    this.boutiqueService.addBoutique(addForm.value).subscribe(
      (response : Boutique) => {}
    );
  }*/
}
