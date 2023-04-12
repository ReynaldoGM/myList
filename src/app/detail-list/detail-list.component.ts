import { Component, OnInit } from '@angular/core';
import { Record } from '../record'
import { RecordService } from '../record.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  record?: Record;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute ) { }


  ngOnInit() {
    this.getRecord();
  }

  getRecord(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    const recordId = Number(this.route.snapshot.paramMap.get('recordId'));
    this.recordService.getRecord(userId, recordId)
      .subscribe(record => this.record = record);
  }



}
