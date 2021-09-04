import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonpsy',
  templateUrl: './boutonpsy.component.html',
  styleUrls: ['./boutonpsy.component.scss']
})
export class BoutonpsyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonpsy(){
    this.router.navigate(['/psy'])
}
} 
