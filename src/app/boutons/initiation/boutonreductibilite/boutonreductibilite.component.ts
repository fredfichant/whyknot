import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonreductibilite',
  templateUrl: './boutonreductibilite.component.html',
  styleUrls: ['./boutonreductibilite.component.scss']
})
export class BoutonreductibiliteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonreductibilite(){
    this.router.navigate(['/reductibilite'])
}
}
