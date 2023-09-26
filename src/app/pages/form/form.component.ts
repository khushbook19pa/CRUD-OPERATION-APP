import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { phoneNumberValidator } from 'src/app/utility-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  constructor(
    private storageService: StorageService,
    private bottomSheetRef: MatBottomSheetRef<FormComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.email],
      }),
      email: new FormControl(''),
      phone: new FormControl(0, [Validators.required, phoneNumberValidator()]),
    });
  }
  onSubmit() {
    if (this.isEmailInvalid()) {
      alert('Email is invalid');
      return;
    }
    if (this.isPhoneInvalid()) {
      alert('Phone is invalid');
      return;
    }
    if (this.bottomSheetRef && this.bottomSheetRef.dismiss) {
      this.bottomSheetRef.dismiss({
        user: this.myForm.value,
      });
    } else {
      this.storageService.setUserData(new User(this.myForm.value));
    }
    alert('Data saved successfully');
    this.myForm.reset();
  }
  onCancel() {
    if (this.bottomSheetRef && this.bottomSheetRef.dismiss) {
      this.bottomSheetRef.dismiss({ close: true });
    }
  }
  isPhoneInvalid() {
    return this.phone?.hasError('phoneNumber');
  }
  isEmailInvalid() {
    return this.email?.hasError('email');
  }
  get phone() {
    return this.myForm.get('phone');
  }
  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
}
