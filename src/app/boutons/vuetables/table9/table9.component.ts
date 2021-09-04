import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table9',
  templateUrl: './table9.component.html',
  styleUrls: ['./table9.component.scss']
})
export class Table9Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable9(){
    this.router.navigate(['/table9'])
}
}
