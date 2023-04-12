import { Component, OnInit } from '@angular/core';
import { Record } from '../record'
import { RecordService } from '../record.service'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  records: Record[] = [];
  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.gerRecords();
  }

  gerRecords(): void {
    this.recordService.getRecords()
      .subscribe(records => this.records = records);
  }

  onClick(){

  }


}
