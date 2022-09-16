import { NgmatTableQueryReflectorModule } from '@nghacks/ngmat-table-query-reflector';
import {
  AdminLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  NotificationComponent,
  OptionsComponent,
  SidebarComponent,
  

} from "./core";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from "ng-material-multilevel-menu";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { BidiModule } from "@angular/cdk/bidi";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { RouterModule } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, registerLocaleData } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { ToastContainerModule, ToastrModule } from "ngx-toastr";
import { BreadcrumbComponent } from "./core/breadcrumb/breadcrumb.component";
import { SharedModule } from "./shared/shared.module";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { SystemHttpInterceptor } from "./shared/services/system-http.interceptor";
import { MatTableExporterModule } from 'mat-table-exporter';
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzMenuModule } from "ng-zorro-antd/menu";
// import { NgMatTableQueryReflectorDirective } from './directives/ng-mat-table-query-reflector.directive';

registerLocaleData(en);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,
    AdminLayoutComponent,
    LayoutComponent,
    AuthLayoutComponent,
    BreadcrumbComponent,
    // NgMatTableQueryReflectorDirective
  ],
  imports: [
    ChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { relativeLinkResolution: "legacy" }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass :'toast-top-right'
    }),
    ToastContainerModule,

    LoadingBarRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BidiModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_API_KEY"
    }),
    PerfectScrollbarModule,
    NgMaterialMultilevelMenuModule,
    NgbModule,
    FontAwesomeModule,
    TranslateModule,
    SharedModule,
    MatTableExporterModule,
    NzDropDownModule,
    NzMenuModule,
  ],
  providers: [
    DatePipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, 
    MultilevelMenuService, 
    { provide: NZ_I18N, useValue: en_US },
    {provide: HTTP_INTERCEPTORS, useClass: SystemHttpInterceptor, multi: true}

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
