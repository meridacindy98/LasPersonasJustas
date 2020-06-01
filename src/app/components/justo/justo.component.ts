import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JustosService } from "../../services/justos.service";

@Component({
  selector: 'app-justo',
  templateUrl: './justo.component.html',
  styleUrls: ['./justo.component.css']
})
export class JustoComponent {

  justo:any = {};

  constructor( private activateRoute:ActivatedRoute, private justoService:JustosService ) { 

    this.activateRoute.params.subscribe( params => {
      this.justo = this.justoService.getJusto( params['id'] )
      console.log(this.justo);
    } )

  }

}
