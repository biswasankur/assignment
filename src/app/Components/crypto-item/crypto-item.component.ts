import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css']
})
export class CryptoItemComponent {
  @Input() crypto: any;
}
