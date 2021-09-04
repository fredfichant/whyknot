import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonportance',
  templateUrl: './boutonportance.component.html',
  styleUrls: ['./boutonportance.component.scss']
})
export class BoutonportanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonportance(){
    this.router.navigate(['/portance'])
}
}
