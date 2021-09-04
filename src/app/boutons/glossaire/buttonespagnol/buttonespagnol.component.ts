import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonespagnol',
  templateUrl: './buttonespagnol.component.html',
  styleUrls: ['./buttonespagnol.component.scss']
})
export class ButtonespagnolComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeButtonespagnol(){
    this.router.navigate(['/espagnol'])
}
}