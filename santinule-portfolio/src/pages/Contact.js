import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    from_name: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration
      const serviceID = 'service_oom9u4k';
      const templateID = 'template_vp0fnv2';
      const publicKey = 'alZWs3SH2q-65Lxes';

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        from_name: formData.from_name,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.from_name
      };

      // Send email
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', from_name: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="content-container">
      <h1 className="main-heading">Contact</h1>
      
      <div className="contact-content">
        <p className="bio-text">
          Please feel free to contact me.
          </p>
          <p className="bio-text">
          Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        
        {submitStatus === 'success' && (
          <div className="status-message success-message">
            <p><span role="img" aria-label="success">✅</span> Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message error-message">
            <p><span role="img" aria-label="error">❌</span> Sorry, there was an error sending your message. Please try again.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
              placeholder="Your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="from_name" className="form-label">Email</label>
            <input
              type="email"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
              placeholder="What's this about?"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-textarea"
              placeholder="Your message here..."
              rows="6"
            />
          </div>
          
          <button type="submit" disabled={isSubmitting} className="form-submit">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;