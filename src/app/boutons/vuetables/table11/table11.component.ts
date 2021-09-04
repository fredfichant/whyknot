import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table11',
  templateUrl: './table11.component.html',
  styleUrls: ['./table11.component.scss']
})
export class Table11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable11(){
    this.router.navigate(['/table11'])
}
}
