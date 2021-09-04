import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonamas',
  templateUrl: './boutonamas.component.html',
  styleUrls: ['./boutonamas.component.scss']
})
export class BoutonamasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonamas(){
    this.router.navigate(['/amas'])
}
}