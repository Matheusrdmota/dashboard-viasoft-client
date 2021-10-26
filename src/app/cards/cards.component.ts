import { NfService } from './../service/nf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  uf: string = '';

  constructor(private service: NfService) { }

  ngOnInit(): void {
    this.service.getMostIndisponibleUf().subscribe(val => {
      this.uf = val.response;
    })
  }

}
