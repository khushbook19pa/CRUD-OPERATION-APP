import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  usersData: User[] = [];
  bottomSheetRef: MatBottomSheetRef<FormComponent> =
    {} as MatBottomSheetRef<FormComponent>;

  constructor(
    private storageService: StorageService,
    private bottomSheet: MatBottomSheet
  ) {}
  ngOnInit(): void {
    this.usersData = this.storageService.getUserData();
  }

  editData(index: number) {
    this.bottomSheetRef = this.bottomSheet.open(FormComponent, {
      data: [],
    });
    this.bottomSheetRef.afterDismissed().subscribe((data) => {
      if (data && data.close) {
        return;
      } else if (data && data.user) {
        this.storageService.editUserData(new User(data.user), index);
      }
    });
  }

  deleteData(index: number) {
    this.storageService.deleteData(index);
    alert('Data deleted successfully, Refresh the page to see the changes');
  }
}
