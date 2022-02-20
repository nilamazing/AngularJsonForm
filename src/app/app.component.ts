import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import * as uischemaAsset from '../assets/uischema.json';
import * as schemaAsset from '../assets/schema.json';
import dataAsset from './data';
import { CustomComponent } from './custom/data.component';
import { and, isControl, rankWith, scopeEndsWith } from '@jsonforms/core';
import { ListUsersComponent } from './custom/list-users/list-users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestJSONForms';
  uischema = uischemaAsset;
  schema = schemaAsset;
  data=dataAsset;
  renderers = [
    ...angularMaterialRenderers,
    {
      renderer: CustomComponent,
      tester: rankWith(5, and(isControl,scopeEndsWith('__data')))
    },
    {
      renderer: ListUsersComponent,
      tester: rankWith(6, and(isControl,scopeEndsWith('___listUsers')))
    }
  ]
}
