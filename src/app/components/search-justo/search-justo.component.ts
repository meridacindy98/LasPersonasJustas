import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JustosService } from "../../services/justos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-justo',
  templateUrl: './search-justo.component.html',
  styleUrls: ['./search-justo.component.css']
})
export class SearchJustoComponent implements OnInit {

  justos:any [] = [];

  constructor(private activateRoute:ActivatedRoute, private justoService:JustosService, private router:Router) { }

  ngOnInit(): void {
      this.activateRoute.params.subscribe( params => {
      this.justos = this.justoService.buscarJusto( params['text'] );  
    } )    
  }

  //me redirecciona a la pag individual del justo
  showJusto( i:number ){  
    this.router.navigate( ['/justo', i] );
  }

}
