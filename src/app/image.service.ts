import { Injectable } from '@angular/core';
import { images } from './interfaces/image.interfaces';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  fetchImages(): Observable<any> {
    return of(images);
  }

}
