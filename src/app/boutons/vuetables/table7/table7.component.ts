import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table7',
  templateUrl: './table7.component.html',
  styleUrls: ['./table7.component.scss']
})
export class Table7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeTable7(){
    this.router.navigate(['/table7'])
}
}
