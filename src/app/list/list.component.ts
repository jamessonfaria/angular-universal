import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [];
  query = '';
  key = 'query';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.query = this.activatedRoute.snapshot.params[this.key];
  }

  ngOnInit(): void {
    this.http.get<any>(`https://api.github.com/search/repositories?q=${this.query}`)
        .subscribe(response => {
          this.list = response.items;
        });
  }

}
