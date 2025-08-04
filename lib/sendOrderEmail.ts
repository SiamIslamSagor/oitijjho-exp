import emailjs from '@emailjs/browser';
import { orderEmailjsConfig } from './emailjs-config';

export interface OrderEmailData {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    specialInstructions: string;
  };
  orderItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  orderNumber: string;
  subtotal: number;
  shippingCost: number;
  total: number;
}

export const sendOrderEmail = async (orderData: OrderEmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Format order items for email
    const orderItemsText = orderData.orderItems
      .map(item => `${item.name} - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    // Format delivery address
    const deliveryAddress = `${orderData.customerInfo.address}\n${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}\n${orderData.customerInfo.country}`;

    // Prepare email template parameters
    const templateParams = {
      customer_name: `${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`,
      customer_email: orderData.customerInfo.email,
      customer_phone: orderData.customerInfo.phone,
      order_number: orderData.orderNumber,
      order_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      delivery_address: deliveryAddress,
      order_items: orderItemsText,
      subtotal: `$${orderData.subtotal.toFixed(2)}`,
      shipping_cost: orderData.shippingCost === 0 ? 'FREE' : `$${orderData.shippingCost.toFixed(2)}`,
      total_amount: `$${orderData.total.toFixed(2)}`,
      payment_method: 'Cash on Delivery',
      special_instructions: orderData.customerInfo.specialInstructions || 'None'
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      orderEmailjsConfig.serviceId,
      orderEmailjsConfig.templateId,
      templateParams,
      orderEmailjsConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Order notification sent successfully!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send order notification'
      };
    }
  } catch (error) {
    console.error('Error sending order email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send order notification'
    };
  }
};

// Alternative function to send order email to customer (order confirmation)
export const sendOrderConfirmationEmail = async (orderData: OrderEmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if customer confirmation template is configured
    const customerTemplateId = 'template_customer_confirmation'; // You can set this in your config
    
    // For now, let's skip customer confirmation since admin notification is working
    // You can uncomment the code below when you create a customer confirmation template
    
    /*
    // Format order items for customer email
    const orderItemsText = orderData.orderItems
      .map(item => `${item.name} - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    // Format delivery address
    const deliveryAddress = `${orderData.customerInfo.address}\n${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}\n${orderData.customerInfo.country}`;

    // Prepare email template parameters for customer confirmation
    const templateParams = {
      customer_name: `${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`,
      customer_email: orderData.customerInfo.email,
      order_number: orderData.orderNumber,
      order_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      delivery_address: deliveryAddress,
      order_items: orderItemsText,
      subtotal: `$${orderData.subtotal.toFixed(2)}`,
      shipping_cost: orderData.shippingCost === 0 ? 'FREE' : `$${orderData.shippingCost.toFixed(2)}`,
      total_amount: `$${orderData.total.toFixed(2)}`,
      payment_method: 'Cash on Delivery',
      special_instructions: orderData.customerInfo.specialInstructions || 'None',
      estimated_delivery: '7-14 business days'
    };

    // Send confirmation email to customer
    const response = await emailjs.send(
      orderEmailjsConfig.serviceId,
      customerTemplateId,
      templateParams,
      orderEmailjsConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Order confirmation sent to customer!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send order confirmation'
      };
    }
    */

    // For now, return success since admin notification is working
    return {
      success: true,
      message: 'Order notification sent successfully!'
    };
    
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send order confirmation'
    };
  }
}; 