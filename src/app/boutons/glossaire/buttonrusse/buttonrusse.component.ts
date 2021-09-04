import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonrusse',
  templateUrl: './buttonrusse.component.html',
  styleUrls: ['./buttonrusse.component.scss']
})
export class ButtonrusseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeButtonrusse(){
    this.router.navigate(['/russe'])
}
}
