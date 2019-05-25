// import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl, Validators} from '@angular/forms';

// @Component({
//   selector: 'app-contact-me',
//   templateUrl: './contact-me.component.html',
//   styleUrls: ['./contact-me.component.css']
// })
// export class ContactMeComponent implements OnInit {
//   form = new FormGroup({
//     nama : new FormControl(''),
//     email: new FormControl('', [
//       Validators.required,
//       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') ]),
//     comment : new FormControl('')
    
//   })

//   get email(){
//     return this.form.get('email');
//   }

//   onSubmit(){
//     console.log(this.form.value);
//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';

class data{
  constructor(
    public name: string = '',
    public email: string = '',
    public comment: string = ''
  ) {}
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  inputData: data[] = [];
  inputModel: data;
  yourData: boolean; 

  ngOnInit() {
  }

  data=[
    {nama: '', email: '', comment: ''}
  ]
  
  onNew() {
    this.inputModel = new data();
  }

  submit(){
    this.inputData.push(this.inputModel);
    this.yourData = true;
  }
}
