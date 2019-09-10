import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-blog",
  templateUrl: "./edit-blog.component.html",
  styleUrls: ["./edit-blog.component.css"]
})
export class EditBlogComponent implements OnInit {
  bookcontent;

  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public router: Router) {
    this.bookcontent = new FormGroup({
      bookname: new FormControl(),
      authorname: new FormControl(),
      avatar: new FormControl()


    });
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.http
      .get(`https://5d11af7e84e9060014576440.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get("id")}`)
      .toPromise()
      .then(
        (response:any) => {
          console.log(response);
          this.bookcontent.setValue({
            bookname: response.bookname,
            authorname: response.authorname,
            avatar: response.avatar

          });
        },
        error => {
          console.log("error");
        }
      );
  }
  postBlog() {
    this.http
      .put(
        `https://5d11af7e84e9060014576440.mockapi.io/books/${this.activatedRoute.snapshot.paramMap.get(
          "id"
        )}`,
        this.bookcontent.value
      )
      .toPromise()
      .then(
        response => {
          this.router.navigate(["./dashboard/list-blog"]);
        },
        error => {}
      );
  }
}
