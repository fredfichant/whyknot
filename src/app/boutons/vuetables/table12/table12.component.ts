import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table12',
  templateUrl: './table12.component.html',
  styleUrls: ['./table12.component.scss']
})
export class Table12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable12(){
    this.router.navigate(['/table12'])
}
}
