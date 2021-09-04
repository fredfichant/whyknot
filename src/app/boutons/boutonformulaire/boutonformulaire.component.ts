import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonformulaire',
  templateUrl: './boutonformulaire.component.html',
  styleUrls: ['./boutonformulaire.component.scss']
})
export class BoutonformulaireComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonFormulaire() {
    this.router.navigate(['/formulaire'])
 }
}
