import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutoninvestigations',
  templateUrl: './boutoninvestigations.component.html',
  styleUrls: ['./boutoninvestigations.component.scss']
})
export class BoutoninvestigationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutoninvestigations(){
    this.router.navigate(['/investigations'])
}
}
