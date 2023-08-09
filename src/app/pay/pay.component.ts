import { Component } from '@angular/core';



declare var Razorpay: any;
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

constructor(){}
  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 2000,
      name: 'komal',
      key: 'rzp_test_DKs9gxVxBGO7YW',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frazorpay.com%2Fnewsroom%2Fbrand-assets%2F&psig=AOvVaw3aKQPEHOyOmJ1eriewk7AG&ust=1691048602710000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICkm4y9vYADFQAAAAAdAAAAABAE',
      prefill: {
        name: 'komal',
        email: 'landgekomal787@gmail.com',
        phone: '7499153042'
      },
      
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }

}
