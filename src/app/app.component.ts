import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simple Text to Url Converter';

  constructor(private router: Router){
  }
  
  ngOnInit() {
    this.router.navigate(['/converter']); 
  }
  
}
