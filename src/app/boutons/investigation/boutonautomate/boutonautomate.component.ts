import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonautomate',
  templateUrl: './boutonautomate.component.html',
  styleUrls: ['./boutonautomate.component.scss']
})
export class BoutonautomateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonAutomate() {
    this.router.navigate(['/automate'])
 }
}
