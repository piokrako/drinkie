import { Component } from "@angular/core";
import { ApiService } from "./../../services/api.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.scss"]
})
export class DrinkComponent {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;

  type: string;
  param: string;
  value: string;

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      this.type = queryParams.type;
      this.param = queryParams.param;
      this.value = queryParams.value.replace(/ /g,'_');
    });
  }

  ngOnInit() {
    console.log('LIST COMPONENT: '+ this.type, this.param, this.value);
    this.apiService.fetchData(this.type, this.param, this.value);
  }

}
