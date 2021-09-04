import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonarabe',
  templateUrl: './buttonarabe.component.html',
  styleUrls: ['./buttonarabe.component.scss']
})
export class ButtonarabeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeButtonarabe(){
    this.router.navigate(['/arabe'])
  }
}
