import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Drinks } from "../interfaces/drinks.interface";
@Injectable()
export class ApiService {
  public ingredients: Array<string> = [];
  public data: Drinks;
  public pages: Array<number> = [];
  type: string;
  pageName?: string;

  constructor(public httpClient: HttpClient) {}

  public fetchData(
    reqType: string,
    reqParam?: string,
    reqValue?: string
  ): void {
    this.data = null;

    const apiQuery: string = `https://www.thecocktaildb.com/api/json/v1/1/${reqType}.php${
      reqParam ? "?" + reqParam + "=" : ""
    }${reqValue ? reqValue : ""}`;
    console.warn("API: "+ apiQuery);

    this.httpClient
      .get(apiQuery)
      .toPromise()
      .then((json: Drinks) => {
        if (reqType === `random` || reqType === `search`) {
          json.drinks.forEach(drink => {
            for (let i = 1; i <= 15; i++) {
              const keyIngredient = `strIngredient${i}`;
              if (
                drink[keyIngredient] === null ||
                drink[keyIngredient].trim() === "" ||
                drink[keyIngredient] === "↵"
              ) {
                delete drink[keyIngredient];
              }

              const keyMeasure = `strMeasure${i}`;
              if (
                drink[keyMeasure] === null ||
                drink[keyMeasure].trim() === "" ||
                drink[keyMeasure] === "↵"
              ) {
                delete drink[keyMeasure];
              }

              if (drink[keyMeasure] && drink[keyIngredient]) {
                this.ingredients.push(
                  drink[keyMeasure].replace(/\s+$/, '') + " " + drink[keyIngredient]
                );
              }
            }
          });
        }

        console.info({ json });
        this.data = json;
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
