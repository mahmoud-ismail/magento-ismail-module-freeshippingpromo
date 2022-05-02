# magento-ismail/module-freeshippingpromo

### This Module is to Add a Distance to Free Shipping Message Based on The Cart Total,for Example:

1. cart total is equal to zero it will dispaly the default message.
2. cart total is between zero and threshold it will show distance to free shipping message.
3. cart total is more than threshold then it will show the free shipping message.


---
**Install**
=======
 
To install the packagist run the following command:
>composer require ismail/module-freeshippingpromo

after downloading the package successfully via git hub, then run the below commands:
> bin/magento modue:enable Ismail_FreeShippingPromo
> 
> bin/magento set:up
> 
> bin/magento setup:static-content:deploy


