import { Component, OnInit } from '@angular/core';
import { BiodataService } from './biodata.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {
  bdate = new Date();
  get format(){
    return 'fullDate'; 
  }
  title = 'Ini Tugas Pertama Biodata';
  getTitle(){
    return this.title;
  }
  nama = 'Maria Sinta Bella';
  alamat = 'jln.Mawar gang 10';

  Biodata;  
  constructor(private service:BiodataService) { 
    this.Biodata = service.getBiodata();
  }

  ngOnInit() {

  }

}
