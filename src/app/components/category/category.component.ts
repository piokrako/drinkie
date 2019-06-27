import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;

  type: string = `filter`;
  param: string = `c`;
  value: string;

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      this.value = queryParams.name;
    });
  }

  ngOnInit() {
    this.apiService.fetchData(this.type, this.param, this.value);

  }

}