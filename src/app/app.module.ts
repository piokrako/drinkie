import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { AppComponent } from "./app.component";
import { RandomComponent } from "./components/random/random.component";
import { DrinkComponent } from "./components/drink/drink.component";
import { ListComponent } from "./components/list/list.component";
import { IndexComponent } from "./components/index/index.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { AboutComponent } from "./components/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    DrinkComponent,
    ListComponent,
    IndexComponent,
    LoaderComponent,
    AboutComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
