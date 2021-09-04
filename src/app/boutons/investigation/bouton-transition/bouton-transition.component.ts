import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bouton-transition',
  templateUrl: './bouton-transition.component.html',
  styleUrls: ['./bouton-transition.component.scss']
})
export class BoutonTransitionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
executeBoutonTransition(){
  this.router.navigate(['/transition'])
}
}
