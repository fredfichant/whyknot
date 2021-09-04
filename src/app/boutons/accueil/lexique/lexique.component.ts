import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lexique',
  templateUrl: './lexique.component.html',
  styleUrls: ['./lexique.component.scss']
})
export class LexiqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeLexique(){ this.router.navigate(['/lexique'])}
}
