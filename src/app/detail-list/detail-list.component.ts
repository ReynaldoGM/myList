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
  newItem: String = '';
  initialRecord?: Record;
  changesMade: boolean = false;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.getRecord();


  }

  getRecord(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    const recordId = Number(this.route.snapshot.paramMap.get('recordId'));
    this.recordService.getRecord(userId, recordId)
      .subscribe(record => {
        this.record = record;
        this.initialRecord = Object.assign({}, record);
      });

  }

  addItem(): void {
    this.record ?.items.push(this.newItem);
  //  this.changesMade = true;
    this.newItem = '';
      this.saveRecord();
  }

  deleteItem(item: String): void {
    this.record ?.items.splice(this.record ?.items.indexOf(item), 1);
    //  this.changesMade = true;
      this.saveRecord();
  }

  editItem(item: String): void {
    //    item.isEditMode =true;
    //  this.record?.items.splice(this.record?.items.indexOf(item), 1,item);
  }

  saveRecord(): void {

      this.recordService.updateRecord(this.record)
        .subscribe(record => this.record = record);
        this.initialRecord =  Object.assign({}, this.record);
      this.changesMade = false;
      
    }

  }
