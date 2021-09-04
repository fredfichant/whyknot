import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonknotfutur',
  templateUrl: './boutonknotfutur.component.html',
  styleUrls: ['./boutonknotfutur.component.scss']
})
export class BoutonknotfuturComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonknotfutur(){
    this.router.navigate(['/knotfutur'])
}
}
