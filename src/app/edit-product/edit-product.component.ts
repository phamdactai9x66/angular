import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public subscript: Subscription;
  public findProduct: any;
  public displayAlert: boolean = false;
  public stateForm: FormGroup;
  constructor(
    public _ActivatedRoute: ActivatedRoute,
    public _ApiService: ApiService,
    public _FormBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    let getid = this._ActivatedRoute.snapshot.params['id'];
    this.subscript = this._ApiService.getProduct().subscribe((data) => {
      this._ApiService.pushInArray(data);
      let findOut = this._ApiService.dataProduct.find(
        (currenValue: any) => currenValue.id == getid
      );
      if (findOut) {
        this.findProduct = findOut;

        this.stateForm = this._FormBuilder.group({
          titlte: [
            this.findProduct.titlte ? this.findProduct.titlte : '',
            [Validators.required],
          ],
          price: [
            this.findProduct.price ? this.findProduct.price : '',
            [Validators.required],
          ],
          desc: [
            this.findProduct.desc ? this.findProduct.desc : '',
            [Validators.required],
          ],
          author: [
            this.findProduct.author ? this.findProduct.author : '',
            [Validators.required],
          ],
        });
      }
    });
  }

  submitForm() {
    let getid = this._ActivatedRoute.snapshot.params['id'];
    this._ApiService
      .updateProduct(this.stateForm.value, getid)
      .subscribe((data) => {
        console.log(data);
        this.displayAlert = true;
      });
  }
}
