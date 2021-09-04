import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table6',
  templateUrl: './table6.component.html',
  styleUrls: ['./table6.component.scss']
})
export class Table6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable6(){
    this.router.navigate(['/table6'])
}
}