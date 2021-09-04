import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table13',
  templateUrl: './table13.component.html',
  styleUrls: ['./table13.component.scss']
})
export class Table13Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable13(){
    this.router.navigate(['/table13'])
}
}
