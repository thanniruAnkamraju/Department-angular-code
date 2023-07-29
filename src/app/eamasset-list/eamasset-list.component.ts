import { Component, OnInit } from '@angular/core';
import { Eamasset } from '../eamasset';
import { EamassetService } from '../eamasset.service';

@Component({
  selector: 'app-eamasset-list',
  templateUrl: './eamasset-list.component.html',
  styleUrls: ['./eamasset-list.component.css']
})
export class EamassetListComponent implements OnInit {

  eamasset: Eamasset[];
 

  constructor(private eamassetService:EamassetService) { }

  ngOnInit(): void {
    this.getEamasset();
  }
  
  
    private getEamasset(){
      this.eamassetService.getEamassetList().subscribe(data => {
        this.eamasset = data;
        console.log(this.eamasset);
  
      });
}}

