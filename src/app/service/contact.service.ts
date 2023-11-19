import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  private contactApiUrl = 'webpage/v1/contact';

  constructor(private http: HttpClient) { }

  getContactInformation() {
    return this.http.get(this.contactApiUrl);
  }

}
