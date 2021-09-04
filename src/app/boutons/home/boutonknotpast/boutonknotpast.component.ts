import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonknotpast',
  templateUrl: './boutonknotpast.component.html',
  styleUrls: ['./boutonknotpast.component.scss']
})
export class BoutonknotpastComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonknotpast(){
    this.router.navigate(['/knotpast'])
}
}
