import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() type: string;
  @Input() param: string;
  @Input() value: string;

  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
    console.info(this.type, this.param, this.value);
  }

}
