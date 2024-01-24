"use client";

const ContactForm = () => {
  return (
    <section className="w-3/4 md:w-1/2 mb-8 flex flex-col p-2 justify-evenly items-center">
        <h2 className="font-bold text-lg mb-6">Get in Touch</h2>
        <form className="w-full flex flex-col items-start">
            <label htmlFor="name" className="mb-1">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required 
              className="w-full h-8 px-2 border border-orange-400 rounded-md mb-2"
            />

            <label htmlFor="email" className="mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full h-8 px-2 border border-orange-400 rounded-md mb-2"
            />

            <label htmlFor="message" className="mb-1">Message:</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-2 py-1 border border-orange-400 rounded-md mb-2"></textarea>

            <button type="submit" className="w-full h-8 mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:from-orange-500 hover:to-red-600">Submit</button>
        </form>
    </section>
  )
}

export default ContactForm;