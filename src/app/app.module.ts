import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { from } from "rxjs";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ManagerComponent } from "./manager/manager.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  NgbPaginationModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ManagerComponent,
    FooterComponent,
    ProductListComponent,
    ProductAddComponent,
    HeaderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
