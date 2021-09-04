import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonenglish',
  templateUrl: './buttonenglish.component.html',
  styleUrls: ['./buttonenglish.component.scss']
})
export class ButtonenglishComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeButtonenglish(){
    this.router.navigate(['/english'])
}
}

