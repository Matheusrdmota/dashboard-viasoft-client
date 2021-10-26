import { DatePipe } from '@angular/common';
import { NfService } from './../service/nf.service';
import { Component, Input, OnInit } from '@angular/core';
import { NfModel } from '../model/nf.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {

  @Input() select!: string;
  nfsData: NfModel[] = [];
  ufFilter!: string;
  ufArray!: any[];
  filter!: FormGroup;
  filterDate!: FormGroup;
  datePicked!: Date;

  constructor(private service : NfService,
              private fb: FormBuilder,
              private datepipe: DatePipe) { }

  ngOnInit(): void {

    if(this.select == 'Estado'){
      this.initializeUfArray();
      this.filter = this.fb.group({
        uf: ['AM']
      })
      this.filterByUf();
      this.filter.valueChanges.pipe(debounceTime(300)).subscribe(val => {
        if(val['uf'] != undefined){
          this.filterByUf();
        }
      })
    }else{
      this.filterDate = this.fb.group({
        date: [new Date()]
      })
      this.datePicked = new Date();
      this.filterByDate();
      this.filterDate.valueChanges.subscribe(val => {
        if(val['date'] != undefined){
          this.filterByDate();
        }
      })
    }
  }

  filterByUf(){
    this.service.listCurrentStatusByUf(this.filter.value['uf']).subscribe(data => {
      this.nfsData = [];
      this.nfsData.push(data)
    });
  }

  filterByDate(){
    this.service.listCurrentStatusByDate(this.datepipe.transform(this.filterDate.value['date'], 'yyyy-MM-dd')!)
    .subscribe(data => {
      this.nfsData = [];
      this.nfsData.push(...data);
    })
  }

  initializeUfArray(){
    this.ufArray = [
      {
        name: 'AM',
        code: 'AM'
    },
      {
        name: 'BA',
        code: 'BA'
    },
      {
        name: 'CE',
        code: 'CE'
    },
      {
        name: 'GO',
        code: 'GO'
    },
      {
        name: 'MG',
        code: 'MG'
    },
      {
        name: 'MS',
        code: 'MS'
    },
      {
        name: 'MT',
        code: 'MT'
    },
      {
        name: 'PE',
        code: 'PE'
    },
      {
        name: 'PR',
        code: 'PR'
    },
      {
        name: 'RS',
        code: 'RS'
    },
      {
        name: 'SP',
        code: 'SP'
    },
      {
        name: 'SVAN',
        code: 'SVAN'
    },
      {
        name: 'SVRS',
        code: 'SVRS'
    },
      {
        name: 'SVC-AN',
        code: 'SVC-AN'
    },
      {
        name: 'SVC-RS',
        code: 'SVC-RS'
    },
    ]
  }

}


