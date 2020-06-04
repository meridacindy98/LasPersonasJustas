import { Component, OnInit } from '@angular/core';
import { JustosService } from '../../services/justos.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-los-justos',
  templateUrl: './los-justos.component.html',
  styleUrls: ['./los-justos.component.css']
})

export class LosJustosComponent implements OnInit {
  justos:any [] = [];

  constructor( private justosService:JustosService, private router:Router) {}

  ngOnInit(): void {
    this.justos = this.justosService.getJustos();
  }
  
  showJusto( i:number ){
  this.router.navigate( ['/justo', i] );
  }
}
