import { Component, Input } from "@angular/core";
import { ApiService } from "./../../services/api.service";

@Component({
  selector: "app-drink",
  templateUrl: "./drink.component.html",
  styleUrls: ["./drink.component.scss"]
})
export class DrinkComponent {
  @Input() type: string;
  apiService: ApiService;
  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    console.info(this.type);
  }
}
