import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Datum, PagedResponse } from './models/users';
import { UsersService } from './service/user.service';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  cols: any;
  measure: string = 'first_name';
  selectedValue: any;
  dataSource: any;
  page: number = 1;
  per_page: number = 6;
  options: Option[] = [
    {
      value: 'id',
      viewValue: 'Id'
    },
    {
      value: 'first_name',
      viewValue: 'First Name'
    },
    {
      value: 'last_name',
      viewValue: 'Last Name'
    },
    {
      value: 'email',
      viewValue: 'Email'
    }
  ];
  constructor(private userService: UsersService, private changeDetectorRefs: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.cols = [
      'id', 'first_name', 'last_name', 'email', 'avatar'
    ];
    this.getData();
  }

  public getData() {
    this.userService.getUsers(this.page, this.per_page).subscribe((data: any) => {
      //console.log(data.data);
      this.dataSource = new MatTableDataSource(data.data);
    })
  }
  public sort(event: any) {
    //console.log(this.users);
    const users = this.dataSource.data;
    for (let i = 0; i < users.length - 1; i++) {
      for (let j = 0; j < users.length - 1 - i; j++) {
        if (users[j][event.value] > users[j + 1][event.value]) {
          const temp = users[j];
          users[j] = users[j + 1];
          users[j + 1] = temp;
        }

      }

    }
    this.dataSource.connect().next(users);
  }

}
