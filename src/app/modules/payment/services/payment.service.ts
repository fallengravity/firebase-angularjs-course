import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  payment(idOrder: string, amount: number): boolean {
    // Send Order ID and Amount to firebase, which calls the payment provider
    // If payment is received, it will return true, if there was an issue, it will return false.
    return true;
  }
}
