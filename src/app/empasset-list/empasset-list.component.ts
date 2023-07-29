import { Component, OnInit } from '@angular/core';
import { Empasset } from '../empasset';
import { EmpassetService } from '../empasset.service';

@Component({
  selector: 'app-empasset-list',
  templateUrl: './empasset-list.component.html',
  styleUrls: ['./empasset-list.component.css']
})
export class EmpassetListComponent implements OnInit {

  empassets: Empasset[];
 

  constructor(private empassetService:EmpassetService) { }

  ngOnInit(): void {
    this.getEmpasset();
  }
  
  
    private getEmpasset(){
      this.empassetService.getEmpassetList().subscribe(data => {
        this.empassets = data;
        console.log(this.empassets);
  
      });
}}


