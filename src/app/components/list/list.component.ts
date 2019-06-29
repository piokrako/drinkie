import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apiService: ApiService;
  activatedRoute: ActivatedRoute;

  type: string;
  param: string;
  value: string;
  category?: string;

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    activatedRoute.queryParams.subscribe(queryParams => {
      this.type = queryParams.type;
      this.param = queryParams.param;
      this.value = queryParams.value.replace(/ /g,'_');
      this.category = queryParams.value;
      console.log('In constructor: '+ this.type, this.param, this.value);
      this.apiService.fetchData(this.type, this.param, this.value);
    });


  }

  ngOnInit() {
    console.log('LIST COMPONENT: '+ this.type, this.param, this.value);
    this.apiService.fetchData(this.type, this.param, this.value);
  }

}
