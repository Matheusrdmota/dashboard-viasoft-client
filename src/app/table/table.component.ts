import { NfService } from './../service/nf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  nfsArray: any[] = [];

  constructor(private service : NfService) { }

  ngOnInit(): void {
    this.service.listCurrentStatus().subscribe(data => this.nfsArray.push(...data));
  }

}
