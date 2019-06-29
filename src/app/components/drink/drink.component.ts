import { Component } from "@angular/core";
import { ApiService } from "./../../services/api.service";
import { ActivatedRoute } from "@angular/router";

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

  private isEmpty(obj: Object) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      if (!this.isEmpty(queryParams)) {
        this.type = queryParams.type;
        this.param = queryParams.param;
        this.value = queryParams.value.replace(/ /g, "_");
      }
    });
  }

  ngOnInit() {
    if(this.type || this.param || this.value) {
          this.apiService.fetchData(this.type, this.param, this.value);
    }
  }
}
