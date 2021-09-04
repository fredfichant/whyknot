import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plastique',
  templateUrl: './plastique.component.html',
  styleUrls: ['./plastique.component.scss']
})
export class PlastiqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executePlastique(){
    this.router.navigate(['/plastique'])
  }
}
