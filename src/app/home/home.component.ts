import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public subscript: Subscription;

  constructor(public _ApiService: ApiService) {}

  ngOnInit(): void {
    this.subscript = this._ApiService.getProduct().subscribe((data) => {
      this._ApiService.pushInArray(data);
      console.log(this._ApiService.dataProduct);
    });
  }
  deleteProduct(id: number) {
    let saveData = this._ApiService.dataProduct;
    let findData = saveData.filter((currenValue: any) => currenValue.id != id);
    this._ApiService.pushInArray(findData);
    this._ApiService.deleteProduct(id).subscribe();
  }
}
