import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonspin',
  templateUrl: './boutonspin.component.html',
  styleUrls: ['./boutonspin.component.scss']
})
export class BoutonspinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonSpin() {
    this.router.navigate(['/spin'])
 }
}
