import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table14',
  templateUrl: './table14.component.html',
  styleUrls: ['./table14.component.scss']
})
export class Table14Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable14(){
    this.router.navigate(['/table14'])
}
}

