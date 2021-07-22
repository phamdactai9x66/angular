import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public url: string = 'http://localhost:3000/product';
  public dataProduct: any[] = [];

  constructor(public _HttpClient: HttpClient) {}

  getProduct(): Observable<any> {
    return this._HttpClient.get(this.url);
  }
  pushInArray(data: any): void {
    this.dataProduct = [...data];
  }
  deleteProduct(id: number): Observable<any> {
    return this._HttpClient.delete(`${this.url}/${id}`);
  }
  updateProduct(data: any, id: number): Observable<any> {
    return this._HttpClient.put(`${this.url}/${id}`, data);
  }
}
