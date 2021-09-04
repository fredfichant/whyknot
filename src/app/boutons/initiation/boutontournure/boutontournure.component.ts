import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutontournure',
  templateUrl: './boutontournure.component.html',
  styleUrls: ['./boutontournure.component.scss']
})
export class BoutontournureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutontournure(){
    this.router.navigate(['/tournure'])
}
}
