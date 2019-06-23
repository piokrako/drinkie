import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Drinks } from "../interfaces/drinks.interface";

@Injectable()
export class ApiService {
  public data: Drinks;
  public pages: Array<number> = [];
  type: string;

  constructor(public httpClient: HttpClient) {}

  public fetchData(
    reqType: string = `search`,
    reqParam: string = ``,
    reqValue: string = ``
  ): void {
    const apiQuery: string = `https://www.thecocktaildb.com/api/json/v1/1/${reqType}.php${
      reqParam ? "?=" + reqParam : ""
    }${reqValue ? "?=" + reqValue : ""}`;
    this.data = null;

    console.info(apiQuery);
    this.httpClient
      .get(apiQuery)
      .toPromise()
      .then((json: Drinks) => {
        this.data = json;
        console.info({ json });
      })
      .catch(err => {
        console.warn(err);
      });
  }
}

// https://www.thecocktaildb.com/api/json/v1/1/

// search.php
//   ?s, // drink name
//   ?i, // ingridient name

// lookup.php
//   ?i // drink by id
//   ?iid // ingridient by id

// random.php

// filter.php
//   ?i, // ingredient
//   ?a, // alcoholic
//   ?c, // category
//   ?g // glass

// list.php
//   ?i, // ingredient
//   ?a, // alcoholic
//   ?c, // category
//   ?g // glass
