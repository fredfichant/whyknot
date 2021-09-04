import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutoninvitation',
  templateUrl: './boutoninvitation.component.html',
  styleUrls: ['./boutoninvitation.component.scss']
})
export class BoutoninvitationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutoninvitation(){
    this.router.navigate(['/invitation'])
}
}
