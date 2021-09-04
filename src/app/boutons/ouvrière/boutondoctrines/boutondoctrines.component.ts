import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutondoctrines',
  templateUrl: './boutondoctrines.component.html',
  styleUrls: ['./boutondoctrines.component.scss']
})
export class BoutondoctrinesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutondoctrines(){
    this.router.navigate(['/doctrines'])
}
}