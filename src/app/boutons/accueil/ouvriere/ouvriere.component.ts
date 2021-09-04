import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ouvriere',
  templateUrl: './ouvriere.component.html',
  styleUrls: ['./ouvriere.component.scss']
})
export class OuvriereComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeOuvriere(){
    this.router.navigate(['/ouvriere'])
  }
}
