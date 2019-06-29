import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  inputValue = '';
  constructor(private router: Router) { 



  }

  goSearch() {
    this.router.navigate(['/search'], { queryParams: { type: 'search', param: 's', value: this.inputValue } });
  }

  ngOnInit() {
  }

}
