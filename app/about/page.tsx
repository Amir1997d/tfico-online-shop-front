import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen mx-auto mt-32 my-8 p-4">
      <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <p>Welcome to Our Business, where we strive to provide quality products and exceptional service to our customers. Learn more about our journey and commitment to excellence.</p>
      </section>

      <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mission and Vision</h2>
          <p>At Our Business, our mission is to [insert mission statement]. Our vision is to [insert vision statement]. We are dedicated to [your core values and principles].</p>
      </section>

      <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p>Our team consists of passionate and talented individuals who are committed to delivering the best possible experience for our customers. Learn more about the people behind Our Business.</p>
      </section>

      <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Have questions or want to get in touch? Visit our <a className="text-blue-500" href="/contact">Contact Us</a> page for more information on how to reach us.</p>
      </section>
    </div>
  )
}

export default Page;