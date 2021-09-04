import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutonsurfaces',
  templateUrl: './boutonsurfaces.component.html',
  styleUrls: ['./boutonsurfaces.component.scss']
})
export class BoutonsurfacesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  
  executeBoutonsurfaces() {
  this.router.navigate(['/surfaces'])
  }

}
