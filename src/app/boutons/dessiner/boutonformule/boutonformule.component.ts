import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boutonformule',
  templateUrl: './boutonformule.component.html',
  styleUrls: ['./boutonformule.component.scss']
})
export class BoutonformuleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonformule(){
    this.router.navigate(['/formule'])
}
}