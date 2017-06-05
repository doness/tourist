import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent} from './home.component';
import { HomeRoutingModule} from './home.routing';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "ngx-bootstrap";


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    RatingModule.forRoot()
  ],
  declarations: [ HomeComponent ],
  providers:[ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class HomeModule { }
