import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-blog",
  templateUrl: "./create-blog.component.html",
  styleUrls: ["./create-blog.component.css"]
})
export class CreateBlogComponent implements OnInit {
  bookform;
  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.bookform = new FormGroup({
      bookname: new FormControl(),
      Description: new FormControl(),
      avatar: new FormControl(),
      authorname: new FormControl()
    });
  }
  submitData() {
    this.http
      .post("https://5d11af7e84e9060014576440.mockapi.io/books", this.bookform.value)
      .toPromise()
      .then(response => {
        this.bookform = response;
        error => {
          console.log("error");
        };
      });
  }
}
