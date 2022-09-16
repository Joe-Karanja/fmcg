import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { OutletsListComponent } from './outlets-list/outlets-list.component';
import { OutletsRoutingModule } from "./outlets-routing.module";
import { AddOutletComponent } from './add-outlet/add-outlet.component';
import { ViewOutletsComponent } from './view-outlets/view-outlets.component';
import { MatInputModule } from "@angular/material/input";
import { MatTableExporterModule } from "mat-table-exporter";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
    OutletsListComponent,
    AddOutletComponent,
    ViewOutletsComponent,
    DialogComponent],
    imports: [
        CommonModule,
        SharedModule,
        OutletsRoutingModule,
        MatInputModule,
        MatTableExporterModule
    ],
    providers: [],
    entryComponents: []
})

export class OutletsModule { }