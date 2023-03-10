import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  postTitle!: string;
  postDetails!: string;
  imageURL!: string;
  postURL!: string;
  addBackground!: boolean;

  postArray: Array<string> = ['post1', 'post2', 'post3', 'post4', 'post5']
  
  objArray: Array<any> = [
    { id: 1, postTitle: 'Post1' },
    { id: 2, postTitle: 'Post2' },
    { id: 3, postTitle: 'Post3' },
    { id: 4, postTitle: 'Post4' },
    { id: 5, postTitle: 'Post5' }
  ]
  
  // objArray: Array<any> = []

  stepForm: string = ""

  isActiveNgStyle: boolean = true
  isActiveNgClass: boolean = true

  name: string = ""
  email: string = ""
  address: string = ""

  userArray: Array<any> = []

  pTitle: string = "Uppercase/Lowercase pipe"
  pNumber: number = 285645
  pNumberDec: number = 3.85674
  pPrice: number = 99.99
  pDate: Date = new Date();
  pJsonObj: object = {
    id: 1,
    title: "Post one"
  }
  pArray: Array<string> = [
    "post1", "post2",
    "post3", "post4",
    "post5", "post6",
    "post7", "post8"
  ]
  pUserDetails = {
    name: "User 1",
    city: "Newyork",
    countryCode: "US"
  }

  addNew() {
    this.objArray.push({id:6, postTitle: 'Post6'})
  }

  onDelete(i: any) {
    this.objArray.splice(i, 1);
  }

  onClick(step: string) {
    this.stepForm = step
  }

  changeStyle() {
    this.isActiveNgStyle = !this.isActiveNgStyle
  }

  changeClass() {
    this.isActiveNgClass = !this.isActiveNgClass
  }

  onSave() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })
  }

  onDeleteUser(index: any) {
    this.userArray.splice(index, 1);
  }
}
