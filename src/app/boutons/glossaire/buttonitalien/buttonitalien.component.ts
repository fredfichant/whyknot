import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonitalien',
  templateUrl: './buttonitalien.component.html',
  styleUrls: ['./buttonitalien.component.scss']
})
export class ButtonitalienComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  executeButtonitalien(){
    this.router.navigate(['/italien'])
}
}
