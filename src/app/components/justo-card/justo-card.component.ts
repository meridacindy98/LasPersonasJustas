import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-justo-card',
  templateUrl: './justo-card.component.html',
  styleUrls: ['./justo-card.component.css']
})
export class JustoCardComponent implements OnInit {

  @Input() justo: any = {}; //El input significa que el heroe puede venir de afuera
  @Input() index:number;

  @Output() justoSelected: EventEmitter<number>;

  constructor(private router:Router) {     
    this.justoSelected = new EventEmitter(); //inicializo el eventEmitter    
  }

  ngOnInit(): void {}
  
  showJusto( index:number ){
    /* this.router.navigate( ['/justo', index] ); */
    this.justoSelected.emit( this.index );
  }
}
