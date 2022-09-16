import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersListComponent } from "./orders-list/orders-list.component";
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { MatInputModule } from "@angular/material/input";
import { MatTableExporterModule } from "mat-table-exporter";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
       OrdersListComponent,
       AddOrderComponent,
       ViewOrderComponent,
       DialogComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        OrdersRoutingModule,
        MatInputModule,
        MatTableExporterModule
    ],
    providers: [],
    entryComponents: []
})

export class OrdersModule { }