import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
 
columnDefs = [
    { header:"Name", field: 'name', sortable: true, filter: true, searching: true},
    { header:"Rank", field: 'rank', sortable: true, filter: true }
];
rowData = [
  { name:"Rajesh" , rank:1 },
  { name:"Pritam" , rank:2 },
  { name:"Alok" , rank:3 },
  { name:"Vishal" , rank:5 },
  { name:"Sumbul" , rank:6 },
  { name:"Nupur" , rank:7 },
  { name:"Sumit" , rank:8 },
  { name:"Jai" , rank:10 },
  { name:"Sammukh" , rank:11 },
  { name:"Amit" , rank:12 },
  { name:"Bai" , rank:13 },
  { name:"Rajesh" , rank:1 },
  { name:"Pritam" , rank:2 },
  { name:"Alok" , rank:3 },
  { name:"Vishal" , rank:5 },
  { name:"Sumbul" , rank:6 },
  { name:"Nupur" , rank:7 },
  { name:"Sumit" , rank:8 },
  { name:"Jai" , rank:10 },
  { name:"Sammukh" , rank:11 },
  { name:"Amit" , rank:12 },
  { name:"Bai" , rank:13 }
];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
