import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items!: MenuItem[];

  title = 'viasoft-front';

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard'
      }
    ]
  }
}
