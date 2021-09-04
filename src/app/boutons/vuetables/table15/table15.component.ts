import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table15',
  templateUrl: './table15.component.html',
  styleUrls: ['./table15.component.scss']
})
export class Table15Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable15(){
    this.router.navigate(['/table15'])
}
}
