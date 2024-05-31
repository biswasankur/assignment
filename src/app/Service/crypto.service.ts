import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
  // private apiUrl = 'https://pro-api.coingecko.com/api/v3/coins/markets';
  private params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: '10',
    page: '1',
    sparkline: 'false'
  };

  constructor(private http: HttpClient) {}

  getCryptos(): Observable<any> {
    return this.http.get(this.apiUrl, { params: this.params });
  }
}
