import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bouton-croisement',
  templateUrl: './bouton-croisement.component.html',
  styleUrls: ['./bouton-croisement.component.scss']
})
export class BoutonCroisementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
executeBoutonCroisement(){
  this.router.navigate(['/croisement'])
}
}

