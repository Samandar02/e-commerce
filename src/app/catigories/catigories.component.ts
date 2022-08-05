import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  constructor(private apiSvc:ApiService) { }
  catigories:any[] = [];
  ngOnInit(): void {
    this.apiSvc.get().subscribe(res=>{
      (res as any[]).forEach(i=>{
        if(!this.catigories.includes(i.category))
        this.catigories.push(i.category)
      })
    })
    console.log(this.catigories)
  }

}
