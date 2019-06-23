import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-random",
  templateUrl: "./random.component.html",
  styleUrls: ["./random.component.scss"]
})
export class RandomComponent implements OnInit {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;
  type: string;
  
  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.type = params.type;
      this.apiService.fetchData(params.type);
    })
  }
}
