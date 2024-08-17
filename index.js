const Stripe = require('stripe');

class UniPay {
    constructor(config) {
      this.providers = {};
      
      if (config.stripe) {
        this.providers.stripe = new Stripe(config.stripe.secretKey);
      }
      
      if (config.razorpay) {
        this.providers.razorpay = new Razorpay({
          key_id: config.razorpay.keyId,
          key_secret: config.razorpay.keySecret
        });
      }
    }
}

module.exports = UniPay;