import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../admin-models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) {
  }

  addInfo(profile: Profile) {
    //отправка данных на сервер методом POST
  }

}
