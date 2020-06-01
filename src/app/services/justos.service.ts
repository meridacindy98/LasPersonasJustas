import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JustosService {

    private justos:any[] = [
        {
          nombre: "Gabi",
          bio: "Del uno Capo.",
          img: "assets/images/gaby.jpg",
          instagram: "https://www.instagram.com/gabii.6380/?hl=es-la",
          facebook: "https://www.facebook.com/gabriel.yucra.99"
        },
        {
          nombre: "Funes",
          bio: "Que onda Funes.",
          img: "assets/images/funes.jpg",
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
          img: "assets/images/cindy.jpg",
          instagram: "https://www.instagram.com/cindo.r/?hl=es-la",
          facebook: "https://www.facebook.com/NegrayVenosa"
        },    
      ];
    
    constructor() {
        console.log('soy un servicio');
     }

     public getJustos(){
         return this.justos;
     }
    
     public getJusto(i : number){
        return this.justos[i];
    }
}