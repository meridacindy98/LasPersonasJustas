import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JustosService {

    private justos:any[] = [
        {
          id: 0,
          nombre: "Gabi",
          bio: "Del uno Capo",
          img: "assets/images/gaby.jpg",
          instagram: "https://www.instagram.com/gabii.6380/?hl=es-la",
          facebook: "https://www.facebook.com/gabriel.yucra.99"
        },
        {
          id: 1,
          nombre: "Funes",
          bio: "El Funes",
          img: "assets/images/funes.jpg",
          instagram: "https://www.instagram.com/alenfunes/?hl=es-la",
          facebook: "https://www.facebook.com/alen.funes"          
        },
        {
          id: 2,
          nombre: "Deibe",
          bio: "El chaja",
          img: "assets/images/deibe.jpg",
          instagram: "https://www.instagram.com/lucasdeibe/?hl=es-la",
          facebook: "https://www.facebook.com/lucas.deibe"
        },
        {
          id: 3,
          nombre: "Cindy",
          bio: "Odio programar",
          img: "assets/images/cindy.jpg",
          instagram: "https://www.instagram.com/cindo.r/?hl=es-la",
          facebook: "https://www.facebook.com/NegrayVenosa"
        }
      ];
    
    constructor() { }

     public getJustos(){
         return this.justos;
     }
    
     public getJusto(i : number){
        return this.justos[i];
    }

    public buscarJusto( text:string ){
      let justosArr:any[] = [];
      text = text.toLowerCase();

      for( let justo of this.justos ){
        let name = justo.nombre.toLowerCase();

          if( name.indexOf(text) >= 0){ /* significa que si encontro el text en neme */
            justosArr.push(justo);     /* agrego el elemento al array */
          }
      }
      return justosArr;
    }
}