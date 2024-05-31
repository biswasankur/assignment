import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/Service/crypto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  cryptos: any[] = [];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe(data => {
      this.cryptos = data;
      console.log(data);
      
    });
  }
}
