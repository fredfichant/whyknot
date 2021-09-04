import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonnormalisation',
  templateUrl: './boutonnormalisation.component.html',
  styleUrls: ['./boutonnormalisation.component.scss']
})
export class BoutonnormalisationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonnormalisation(){
    this.router.navigate(['/normalisation'])
}
}
