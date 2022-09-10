import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  private contactApiUrl = '/HomeServer/contact';

  constructor(private http: HttpClient) { }

  getContactInformation() {
    return this.http.get(this.contactApiUrl);
  }

}
