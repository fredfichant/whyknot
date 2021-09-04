import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonclitorne',
  templateUrl: './boutonclitorne.component.html',
  styleUrls: ['./boutonclitorne.component.scss']
})
export class BoutonclitorneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonclicorne() {
    this.router.navigate(['/clitorne'])
 }
}
