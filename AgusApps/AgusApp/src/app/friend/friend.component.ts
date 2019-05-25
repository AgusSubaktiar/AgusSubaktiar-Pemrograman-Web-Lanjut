// import { Component, OnInit} from '@angular/core';
// import { Http } from '@angular/http';
// import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


// @Component({
//   selector: 'app-friend',
//   templateUrl: './friend.component.html',
//   styleUrls: ['./friend.component.css']
// })
// export class FriendComponent {
//   posts: any[];
//   private url = 'http://jsonplaceholder.typicode.com/posts';

//   constructor(private http: Http) { 
//     http.get(this.url)
//     .subscribe(response => {
//       this.posts=response.json();
//       // console.log(response.json);
//     });
//   }

//   createPost(input: HTMLInputElement){
//     let post = {title: input.value};
//     input.value = '';

//     this.http.post(this.url, JSON.stringify(post))
//     .subscribe(response => {
//       post['id'] = response.json().id;
//       this.posts.splice(0,0, post);
//     })
//   }
  
//   updatePost(post){
//     this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true})).subscribe(response => {console.log(response.json());})  
//   }

//   deletePost(post){
//     this.http.delete(this.url + '/' + post.id).subscribe(response => {
//       let index = this.posts.indexOf(post);
//       this.posts.splice(index, 1);
//     });
//   }
    
//   log(z) {
//       console.log(z);
//     }

//     coursesForOne=[
//       {id:1, name:'Agus', email:'agussubaktiar@gmail.com', contact:'085648975022'}
//       ]

//     submit(form){
//       this.coursesForOne.push({id: this.coursesForOne.length + 1, name: this.uppercase(form.nama), email: form.email, contact: form.contact});
//       // form.valid;
//      }

//      uppercase(nama){
//       return nama.toUpperCase();
//     }
//   }

import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  searchText: any = {name: ''};
  constructor(private authService: AuthService, filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.data, {nama: ''}));
  }

  data=[
    // {id: 1, name: 'Peter Liu', email: 'Peter Liu', contact: '08123456789'},
    // {id: 2, name: 'Pitir Liu', email: 'Peter Liu', contact: '08123456789'}
  ]

  submit(form){
    this.data.push({id: this.data.length + 1, name: this.uppercase(form.nama) , email: form.email, contact: form.contact});
    form.valid;
  }

  uppercase(nama){
    return nama.toUpperCase();
  }
}