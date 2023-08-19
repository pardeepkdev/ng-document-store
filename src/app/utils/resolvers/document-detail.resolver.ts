import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Document } from '../typings/Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentDetailResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    const identifier = route.paramMap.get('docuId'); // Assuming the route parameter is named 'id'
    const documents = JSON.parse(localStorage.getItem('documentData') || '');
    const docIdx = documents.findIndex((d:Document) => d.identifier === identifier);
    if(docIdx > -1) {
      return documents[docIdx]
    }

    return null
  }
}
