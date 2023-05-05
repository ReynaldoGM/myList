import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import {RecordService} from './record.service'
@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    DashboardComponent,
    NavigationBarComponent,
    DetailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
