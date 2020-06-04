import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JustosService {

    private justos:Justo[] = [
        {
          nombre: "Gabi",
          bio: "Del uno Capo",
          img: "assets/images/gaby.jpg",
          instagram: "https://www.instagram.com/gabii.6380/?hl=es-la",
          facebook: "https://www.facebook.com/gabriel.yucra.99"
        },
        {
          nombre: "Funes",
          bio: "El Funes",
          img: "assets/images/funes1.jpg",
          instagram: "https://www.instagram.com/alenfunes/?hl=es-la",
          facebook: "https://www.facebook.com/alen.funes"          
        },
        {
          nombre: "Deibe",
          bio: "El chaja",
          img: "assets/images/deibe.jpg",
          instagram: "https://www.instagram.com/lucasdeibe/?hl=es-la",
          facebook: "https://www.facebook.com/lucas.deibe"
        },
        {
          nombre: "Cindy",
          bio: "Odio programar",
          img: "assets/images/cindy1.jpg",
          instagram: "https://www.instagram.com/cindo.r/?hl=es-la",
          facebook: "https://www.facebook.com/NegrayVenosa"
        }
      ];
    
    constructor() {
      
     }

     public getJustos(){
         return this.justos;
     }
    
     public getJusto(i : number){
        return this.justos[i];
    }

    public buscarJusto( text:string ){
      let justosArr:any[] = [];
      text = text.toLowerCase();

      for( let i = 0; i < this.justos.length; i++ ){
        let justo = this.justos[i];
        let name = justo.nombre.toLowerCase();            
          if( name.indexOf(text) >= 0){ /* significa que si encontro el text en neme */
            justo.id = i;
            justosArr.push(justo);     /* agrego el elemento al array */
          }
      }
      return justosArr;
    }
}

export interface Justo{
  id ?: number;
  nombre : string;
  bio : string;
  img : string;
  facebook : string;
  instagram :  string;
}