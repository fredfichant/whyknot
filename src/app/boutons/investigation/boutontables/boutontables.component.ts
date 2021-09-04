import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutontables',
  templateUrl: './boutontables.component.html',
  styleUrls: ['./boutontables.component.scss']
})
export class BoutontablesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonTables() {
    this.router.navigate(['/tableno'])
 }
}
