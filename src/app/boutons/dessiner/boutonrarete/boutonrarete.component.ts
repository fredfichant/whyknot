import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonrarete',
  templateUrl: './boutonrarete.component.html',
  styleUrls: ['./boutonrarete.component.scss']
})
export class BoutonrareteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonrarete(){
    this.router.navigate(['/rarete'])
}
}