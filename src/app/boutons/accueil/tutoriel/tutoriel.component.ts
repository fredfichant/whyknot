import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.scss']
})
export class TutorielComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  executeTuto(){
    this.router.navigate(['/tutoriel'])
  }

}
