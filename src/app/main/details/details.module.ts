import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DetailsComponent} from './details.component';
import { DetailsRoutingModule} from './details.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    DetailsRoutingModule,
    CommonModule,
    FormsModule,
    RatingModule.forRoot()
  ],
  declarations: [ DetailsComponent ],
  providers: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class DetailsModule { }