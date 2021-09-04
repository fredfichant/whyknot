import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table8',
  templateUrl: './table8.component.html',
  styleUrls: ['./table8.component.scss']
})
export class Table8Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable8(){
    this.router.navigate(['/table8'])
}
}
