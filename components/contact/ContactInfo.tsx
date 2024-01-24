import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="w-full p-4 m-4 flex flex-col justify-between items-center">
        <h2 className="font-bold text-lg mb-6">Contact Information</h2>
        <div>
          <p><strong>Address:</strong> Your Business Street, City, Country</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> <Link href="mailto:contact@yourbusiness.com">contact@yourbusiness.com</Link></p>
        </div>
    </section>
  )
}

export default ContactInfo;