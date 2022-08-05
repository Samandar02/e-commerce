import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  constructor(private apiSvc:ApiService,private router:Router) { }
  catigories:any[] = ['all'];
  ngOnInit(): void {
    this.apiSvc.get().subscribe(res=>{
      (res as any[]).forEach(i=>{
        if(!this.catigories.includes(i.category))
        this.catigories.push(i.category)
      })
    })
    console.log(this.catigories)
  }
  onSelect(catName:string,index:number){
    this.router.navigate([''],{queryParams:{id:index,catigorie:catName}})
  }

}
