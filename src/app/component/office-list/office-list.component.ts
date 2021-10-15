import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';
import { Office } from 'src/app/domain/office';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit, OnDestroy {

  public offices: Office[] = [];
  public subOffices: Subscription = new Subscription;

  constructor(public officeService: OfficeService) { }
  ngOnDestroy(): void {
    this.subOffices.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subOffices = this.officeService.getAll().subscribe(data => {
      this.offices = data;
    })

  }

}

