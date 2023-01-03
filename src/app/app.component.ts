import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Boutique } from './boutique';
import { BoutiqueService } from './boutique.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: String = "UEFullStackProjectApp"

  public boutiques: Boutique[] | undefined;
  public updateBoutique : Boutique;
  public deleteBoutique : Boutique;

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

  public onAddBoutique(addForm: NgForm): void {
    document.getElementById('add-shop-form').click();
    this.boutiqueService.addBoutique(addForm.value).subscribe(
      (response: Boutique) => {
        console.log(response);
        this.getBoutiques();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteBoutique(boutiqueId: number): void {
    this.boutiqueService.deleteBoutique(boutiqueId).subscribe(
      {
        next: (response: void) => {
          console.log(response);
          this.getBoutiques();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
    );
  }
}
