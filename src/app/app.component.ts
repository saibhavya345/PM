import { Component, OnInit } from '@angular/core';
import { Owner } from './owner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'pms';
  
}
