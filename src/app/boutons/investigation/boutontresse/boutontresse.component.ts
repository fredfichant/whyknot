import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutontresse',
  templateUrl: './boutontresse.component.html',
  styleUrls: ['./boutontresse.component.scss']
})
export class BoutontresseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutontresse(){
    this.router.navigate(['/tresse'])
}
}