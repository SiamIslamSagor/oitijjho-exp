# EmailJS Order Notification Setup Guide

## Overview
This guide will help you set up EmailJS templates to send order notifications when customers complete their checkout.

## Prerequisites
- EmailJS account (https://www.emailjs.com/)
- Email service configured (Gmail, Outlook, etc.)

## Step 1: Create EmailJS Templates

### Template 1: Order Notification (Admin)
**Template ID:** `template_order_notification`

**Template Variables:**
```
{{customer_name}}
{{customer_email}}
{{customer_phone}}
{{order_number}}
{{order_date}}
{{delivery_address}}
{{order_items}}
{{subtotal}}
{{shipping_cost}}
{{total_amount}}
{{payment_method}}
{{special_instructions}}
```

**Sample Template:**
```html
<h2>New Order Received - {{order_number}}</h2>

<h3>Customer Information:</h3>
<p><strong>Name:</strong> {{customer_name}}</p>
<p><strong>Email:</strong> {{customer_email}}</p>
<p><strong>Phone:</strong> {{customer_phone}}</p>

<h3>Delivery Address:</h3>
<pre>{{delivery_address}}</pre>

<h3>Order Details:</h3>
<p><strong>Order Date:</strong> {{order_date}}</p>
<p><strong>Payment Method:</strong> {{payment_method}}</p>

<h3>Order Items:</h3>
<pre>{{order_items}}</pre>

<h3>Order Summary:</h3>
<p><strong>Subtotal:</strong> {{subtotal}}</p>
<p><strong>Shipping:</strong> {{shipping_cost}}</p>
<p><strong>Total:</strong> {{total_amount}}</p>

<h3>Special Instructions:</h3>
<p>{{special_instructions}}</p>
```

### Template 2: Order Confirmation (Customer)
**Template ID:** `template_order_confirmation`

**Template Variables:**
```
{{customer_name}}
{{customer_email}}
{{order_number}}
{{order_date}}
{{delivery_address}}
{{order_items}}
{{subtotal}}
{{shipping_cost}}
{{total_amount}}
{{payment_method}}
{{special_instructions}}
{{estimated_delivery}}
```

**Sample Template:**
```html
<h2>Order Confirmation - {{order_number}}</h2>

<p>Dear {{customer_name}},</p>

<p>Thank you for your order! We have received your order and are processing it.</p>

<h3>Order Details:</h3>
<p><strong>Order Number:</strong> {{order_number}}</p>
<p><strong>Order Date:</strong> {{order_date}}</p>
<p><strong>Payment Method:</strong> {{payment_method}}</p>

<h3>Delivery Address:</h3>
<pre>{{delivery_address}}</pre>

<h3>Order Items:</h3>
<pre>{{order_items}}</pre>

<h3>Order Summary:</h3>
<p><strong>Subtotal:</strong> {{subtotal}}</p>
<p><strong>Shipping:</strong> {{shipping_cost}}</p>
<p><strong>Total:</strong> {{total_amount}}</p>

<h3>Special Instructions:</h3>
<p>{{special_instructions}}</p>

<h3>Delivery Information:</h3>
<p><strong>Estimated Delivery:</strong> {{estimated_delivery}}</p>

<p>We will contact you soon to confirm your order details and arrange delivery.</p>

<p>Best regards,<br>
Oitijjho Team</p>
```

## Step 2: Update Configuration

Update the template IDs in `lib/emailjs-config.ts`:

```typescript
export const orderEmailjsConfig = {
  serviceId: "your_service_id",
  templateId: "template_order_notification", // Update with your actual template ID
  publicKey: "your_public_key",
  // ... rest of config
};
```

## Step 3: Test the Integration

1. Add items to cart
2. Go to checkout
3. Fill out customer information
4. Submit order
5. Check your email for notifications

## EmailJS Template Variables Explained

### Customer Information
- `{{customer_name}}` - Full name (First + Last)
- `{{customer_email}}` - Customer's email address
- `{{customer_phone}}` - Customer's phone number

### Order Information
- `{{order_number}}` - Unique order identifier (e.g., ORD-1234567890-ABC123DEF)
- `{{order_date}}` - Formatted date and time of order
- `{{payment_method}}` - Always "Cash on Delivery"

### Delivery Information
- `{{delivery_address}}` - Complete delivery address (formatted)
- `{{special_instructions}}` - Any special delivery notes

### Order Items
- `{{order_items}}` - Formatted list of items with quantities and prices
- `{{subtotal}}` - Order subtotal before shipping
- `{{shipping_cost}}` - Shipping cost (or "FREE" if over $500)
- `{{total_amount}}` - Final total including shipping

### Additional (Customer Confirmation Only)
- `{{estimated_delivery}}` - Estimated delivery timeframe

## Troubleshooting

### Common Issues:

1. **Template not found error**
   - Verify template ID in configuration
   - Check template exists in EmailJS dashboard

2. **Email not sending**
   - Verify service ID and public key
   - Check EmailJS account status
   - Review browser console for errors

3. **Template variables not showing**
   - Ensure variable names match exactly
   - Check for typos in template

### Debug Mode:
Enable debug logging by adding this to your component:
```typescript
console.log('Order Data:', orderData);
console.log('Template Params:', templateParams);
```

## Security Notes

- EmailJS public key is safe to expose in client-side code
- Never include private keys or sensitive credentials
- Consider rate limiting for production use
- Monitor EmailJS usage and quotas

## Production Considerations

1. **Rate Limiting**: Implement rate limiting to prevent spam
2. **Error Handling**: Add proper error handling for failed emails
3. **Monitoring**: Set up monitoring for email delivery success rates
4. **Backup**: Consider backup notification methods (SMS, webhook, etc.)
5. **Templates**: Customize templates to match your brand

## Support

For EmailJS support:
- Documentation: https://www.emailjs.com/docs/
- Community: https://community.emailjs.com/
- Support: support@emailjs.com 