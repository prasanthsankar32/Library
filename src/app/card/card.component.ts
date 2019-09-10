import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
bookcontent;
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient) {}
   cards=[
    {
      img:"assets/img/bk1.jpg",
      title:"Heaven On Earth",
      author:"Michael Shermer",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    },
    {
      img:"assets/img/bk2.jpg",
      title:"Human Universe",
      author:"Brian Cox",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    },
    {
      img:"assets/img/bk3.jpg",
      title:"Lost and Founder",
      author:"Rand Fishkin",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet"
    }
  ]

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
