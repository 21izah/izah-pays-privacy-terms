import React, { useState } from 'react';

const AccountDeletionRequest = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    accountNumber: '',
    reason: '',
    confirmation: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const reasons = [
    'No longer need the service',
    'Privacy concerns',
    'Switching to another service',
    'Dissatisfied with service',
    'Temporary account closure',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+\s()-]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number is invalid';
    }

    if (!formData.reason) {
      newErrors.reason = 'Please select a reason';
    }

    if (!formData.confirmation) {
      newErrors.confirmation = 'You must confirm to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create email body
    const subject = encodeURIComponent('Account Deletion Request - Izah Pays');
    const body = encodeURIComponent(`
Account Deletion Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Account Number: ${formData.accountNumber || 'Not provided'}
Reason for Deletion: ${formData.reason}

Additional Information:
I hereby request the deletion of my Izah Pays account and all associated personal data. I understand that this action is irreversible and that I will lose access to all services and data associated with this account.

Date: ${new Date().toLocaleDateString()}
    `);

    // Open default email client
    window.location.href = `mailto:czaexchange@gmail.com?subject=${subject}&body=${body}`;

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          accountNumber: '',
          reason: '',
          confirmation: false
        });
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Izah Pays</h1>
              <p className="text-sm text-gray-600 mt-1">Account Deletion Request</p>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>czaexchange@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Info Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 sm:px-8 py-8 sm:py-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Request Account Deletion
                </h2>
                <p className="text-red-50 text-sm sm:text-base leading-relaxed">
                  Please read this carefully before proceeding. Account deletion is permanent and cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="px-6 sm:px-8 py-6 bg-yellow-50 border-b border-yellow-100">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All your personal data and account information will be permanently deleted</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You will lose access to all services and features associated with your account</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Any pending transactions must be completed before deletion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>This action cannot be reversed once processed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Processing may take up to 30 days to complete</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-8">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-semibold text-green-800 mb-1">Email Client Opened</h4>
                    <p className="text-sm text-green-700">
                      Please send the email from your email client to complete your deletion request. 
                      If the email client didn't open, please send an email manually to czaexchange@gmail.com with your request details.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Use the email associated with your Izah Pays account
                </p>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="+234 XXX XXX XXXX"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Account Number (Optional) */}
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your account number if available"
                />
              </div>

              {/* Reason for Deletion */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Account Deletion <span className="text-red-500">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white`}
                >
                  <option value="">Select a reason</option>
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-600">{errors.reason}</p>
                )}
              </div>

              {/* Confirmation Checkbox */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="confirmation"
                    name="confirmation"
                    checked={formData.confirmation}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="confirmation" className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">I understand and confirm that:</span>
                    <ul className="mt-2 space-y-1 text-xs text-gray-600">
                      <li>• This action is permanent and cannot be undone</li>
                      <li>• All my data will be deleted from Izah Pays systems</li>
                      <li>• I will lose access to all services and features</li>
                      <li>• Any pending transactions must be settled first</li>
                    </ul>
                  </label>
                </div>
                {errors.confirmation && (
                  <p className="mt-2 text-sm text-red-600 ml-7">{errors.confirmation}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Deletion Request'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex-1 sm:flex-none bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>

          {/* Footer Info */}
          <div className="px-6 sm:px-8 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900 mb-1">What happens next?</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Your email client will open with a pre-filled deletion request</li>
                  <li>Send the email to complete your request</li>
                  <li>Our team will review your request within 2-3 business days</li>
                  <li>You'll receive a confirmation email once processing begins</li>
                  <li>Account deletion will be completed within 30 days</li>
                </ol>
                <p className="mt-3">
                  <strong>Need help?</strong> Contact us at{' '}
                  <a href="mailto:czaexchange@gmail.com" className="text-blue-600 hover:underline">
                    czaexchange@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Privacy</h3>
                <p className="text-sm text-gray-600">
                  We comply with NDPR regulations and ensure your data is handled securely throughout the deletion process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Process</h3>
                <p className="text-sm text-gray-600">
                  Your request is processed securely by our data protection team with full audit trails maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 Izah Pays Microfinance Bank Limited. All rights reserved.</p>
            <p className="mt-2">15A Bailey street, Bariga, Lagos, Nigeria</p>
            <div className="mt-3 flex items-center justify-center space-x-4">
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="mailto:czaexchange@gmail.com" className="text-blue-600 hover:underline">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountDeletionRequest;