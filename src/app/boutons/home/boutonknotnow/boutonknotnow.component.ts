import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonknotnow',
  templateUrl: './boutonknotnow.component.html',
  styleUrls: ['./boutonknotnow.component.scss']
})
export class BoutonknotnowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonknotnow(){
    this.router.navigate(['/knotnow'])
}
}
