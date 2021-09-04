import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonmetamorphose',
  templateUrl: './boutonmetamorphose.component.html',
  styleUrls: ['./boutonmetamorphose.component.scss']
})
export class BoutonmetamorphoseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeBoutonmetamorphose(){
    this.router.navigate(['/metamorphose'])
}
}