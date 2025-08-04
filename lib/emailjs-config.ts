// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS service ID (e.g., "gmail", "outlook", etc.)
  serviceId: "service_ixl0j1c",
  
  // Your EmailJS template ID
  templateId: "template_oeq569o",
  
  // Your EmailJS public key
  publicKey: "HaVmkjWSRynCubcTj",
  
  // Email template parameters mapping
  templateParams: {
    from_name: "from_name",
    from_email: "from_email", 
    phone: "phone",
    company: "company",
    consultation_type: "consultation_type",
    preferred_date: "preferred_date",
    preferred_time: "preferred_time",
    message: "message",
    submission_time: "submission_time",
    to_name: "to_name"
  }
};

// Order notification EmailJS configuration
export const orderEmailjsConfig = {
  // Your EmailJS service ID
  serviceId: "service_ixl0j1c",
  
  // Your EmailJS order template ID (create this template in EmailJS)
  templateId: "template_lsmgkoh", // Update this with your actual order template ID
  
  // Your EmailJS public key
  publicKey: "HaVmkjWSRynCubcTj",
  
  // Order template parameters mapping
  orderTemplateParams: {
    customer_name: "customer_name",
    customer_email: "customer_email",
    customer_phone: "customer_phone",
    order_number: "order_number",
    order_date: "order_date",
    delivery_address: "delivery_address",
    order_items: "order_items",
    subtotal: "subtotal",
    shipping_cost: "shipping_cost",
    total_amount: "total_amount",
    payment_method: "payment_method",
    special_instructions: "special_instructions"
  }
};

// Helper function to validate EmailJS configuration
export const validateEmailjsConfig = () => {
  const { serviceId, templateId, publicKey } = emailjsConfig;

  
  if (serviceId !== "service_ixl0j1c") {
    console.warn(`⚠️ EmailJS Service ID not configured. Please update lib/emailjs-config.ts`);
    return false;
  }
  
  if (templateId !== "template_oeq569o") {
    console.warn("⚠️ EmailJS Template ID not configured. Please update lib/emailjs-config.ts");
    return false;
  }
  
  if (publicKey !== "HaVmkjWSRynCubcTj") {
    console.warn("⚠️ EmailJS Public Key not configured. Please update lib/emailjs-config.ts");
    return false;
  }
  
  return true;
};

// Helper function to validate Order EmailJS configuration
export const validateOrderEmailjsConfig = () => {
  const { serviceId, templateId, publicKey } = orderEmailjsConfig;

  if (serviceId !== "service_ixl0j1c") {
    console.warn(`⚠️ Order EmailJS Service ID not configured. Please update lib/emailjs-config.ts`);
    return false;
  }
  
  if (templateId === "template_lsmgkoh") {
    console.warn("⚠️ Order EmailJS Template ID not configured. Please update lib/emailjs-config.ts");
    return false;
  }
  
  if (publicKey !== "HaVmkjWSRynCubcTj") {
    console.warn("⚠️ Order EmailJS Public Key not configured. Please update lib/emailjs-config.ts");
    return false;
  }
  
  return true;
}; 