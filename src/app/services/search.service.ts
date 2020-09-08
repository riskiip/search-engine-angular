import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { GoogleResponse } from "../models/GoogleResponse.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  api_key: string = environment.API_KEY;
  cx_key: string = environment.CX_KEY;
  server_url: string = environment.SERVER_URL;

  constructor(private http: HttpClient) {}

  getSearchData(searchTerm: string): Observable<GoogleResponse> {
    return this.http.get<GoogleResponse>(`${this.server_url}`, {
      params: {
        key: this.api_key,
        cx: this.cx_key,
        q: searchTerm,
      },
    });
  }
}
