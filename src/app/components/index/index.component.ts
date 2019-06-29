import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  inputValue:string = '';
  inputError:boolean = false;
  constructor(private router: Router) { 



  }

  goSearch() {
    if (this.inputValue != '') {
      this.router.navigate(['/search'], { queryParams: { type: 'search', param: 's', value: this.inputValue } });
    } else {
      this.inputError=true;
    }
  }

  ngOnInit() {
  }

}
