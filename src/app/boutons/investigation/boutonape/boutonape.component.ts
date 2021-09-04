import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonape',
  templateUrl: './boutonape.component.html',
  styleUrls: ['./boutonape.component.scss']
})
export class BoutonapeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
executeBoutonApe() {
   this.router.navigate(['/ape'])
}
}
