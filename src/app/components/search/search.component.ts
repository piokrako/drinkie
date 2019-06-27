import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;

  @Input() type: string;
  param: string;
  value: string;

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      console.log("Search params: " + queryParams)
      this.value = queryParams.name;
    });
  }

  ngOnInit() {
    this.apiService.fetchData(this.type, this.param, this.value);

  }

}