import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonombre',
  templateUrl: './boutonombre.component.html',
  styleUrls: ['./boutonombre.component.scss']
})
export class BoutonombreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonombre(){
    this.router.navigate(['/ombre'])
}
}