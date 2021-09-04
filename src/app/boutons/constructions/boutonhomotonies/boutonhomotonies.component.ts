import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonhomotonies',
  templateUrl: './boutonhomotonies.component.html',
  styleUrls: ['./boutonhomotonies.component.scss']
})
export class BoutonhomotoniesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  executeBoutonhomotonies() {
    this.router.navigate(['/homotonies'])
  }
}
