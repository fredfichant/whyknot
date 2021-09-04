import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonmutation',
  templateUrl: './boutonmutation.component.html',
  styleUrls: ['./boutonmutation.component.scss']
})
export class BoutonmutationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonmutation(){
    this.router.navigate(['/mutation'])
}
}