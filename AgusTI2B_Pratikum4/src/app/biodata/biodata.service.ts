import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor() { }

  getBiodata(){
    return [
      {id: 1, hobi: 'berlari', ket: 'lari 1 jam tiap hari'},
      {id: 2, hobi: 'senam', ket: 'senam tiap sore'},
      {id: 3, hobi: 'bermain musik', ket: 'bermain musik saat waktu senggang'},
    ];
  }
}
