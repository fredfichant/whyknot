import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table10',
  templateUrl: './table10.component.html',
  styleUrls: ['./table10.component.scss']
})
export class Table10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable10(){
    this.router.navigate(['/table10'])
}
}
