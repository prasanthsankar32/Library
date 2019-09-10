import { Component, OnInit } from "@angular/core";
import {ActivatedRoute } from "@angular/router";
import { HttpClient} from "@angular/common/http";
@Component({
  selector: "app-create-blog",
  templateUrl: "./view-blog.component.html",
  styleUrls: ["./view-blog.component.css"]
})
export class ViewBlogComponent implements OnInit {
bookcontent;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://5d11af7e84e9060014576440.mockapi.io/books")
    .toPromise()
    .then((response) => {
      this.bookcontent = response ;
    },
    (error) => {
      console.log("error");
    });
  }

}
