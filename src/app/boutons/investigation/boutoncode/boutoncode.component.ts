import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutoncode',
  templateUrl: './boutoncode.component.html',
  styleUrls: ['./boutoncode.component.scss']
})
export class BoutoncodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutoncode(){
    this.router.navigate(['/code'])
}
}