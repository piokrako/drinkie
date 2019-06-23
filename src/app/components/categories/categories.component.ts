import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;

  type: string;
  param: string;
  value: string;

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      console.warn({queryParams});
      this.type = queryParams.type;
      this.param = queryParams.param;
      this.value = queryParams.value;
    });
  }

  ngOnInit() {
    this.apiService.fetchData(this.type, this.param, this.value);
  }
}
