define([
    "jquery",
    "uiComponent",
    "ko",
    "Magento_Customer/js/customer-data",
    "underscore"
], function ($,Component,ko,customerData,_) {
    'use strict'
    return Component.extend({
        defaults: {
            threshold: 100,
            defaultMsg: "free shipping if you purchase more than 100$",
            ItemOnCartMsg: "you still $xx.xx away from free shipping",
            freeShippingMsg: "congratulation you have a free shipping now",
            subtotal: 0.00,
            message: "this is my new free message",
            closeMsg : "X",
            template: "Ismail_FreeShippingPromo/free-shipping-banner",
            tracks:{
                subtotal: true,
                message: true,
                closeMsg: true
            }
        },
        initialize: function () {
            this._super()
            let self = this
            let cart = customerData.get('cart')

            customerData.getInitCustomerData().done(function () {
                if(!_.isEmpty(cart()) || !_.isUndefined(cart().subtotalAmount)){
                    self.subtotal = cart().subtotalAmount
                }
            })
            cart.subscribe(function (cart) {
                if(!_.isEmpty(cart) || !_.isUndefined(cart.subtotalAmount)){
                    self.subtotal = cart.subtotalAmount
                }
            })
            self.message = self.defaultMsg
            self.message = ko.computed(function () {
                if(_.isUndefined(self.subtotal) ||self.subtotal === 0){
                    return self.defaultMsg
                }else if (self.subtotal > 0 && self.subtotal < 100){
                    let difference = 100 - self.subtotal
                    return self.ItemOnCartMsg.replace("$xx.xx",difference+"$")
                }else if(self.subtotal > 100){
                    return self.freeShippingMsg
                }
            })
        },
        formatCurrency: function (){
            return '$'+ this.subtotal.toFixed(2)
        },
        hideAll: function (){
            $("#free-shipping-banner").slideUp(2000)
        }

    })
})
