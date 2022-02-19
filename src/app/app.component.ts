import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import * as uischemaAsset from '../assets/uischema.json';
import * as schemaAsset from '../assets/schema.json';
import dataAsset from './data';

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
    ...angularMaterialRenderers
  ]
}
