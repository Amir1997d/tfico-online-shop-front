import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="w-full my-8 flex flex-col justify-center items-center">
      <h2 className="font-bold text-lg mb-6">Connect With Us</h2>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <span title='Our FaceBook'>
          <Link href="/facebook" className="flex items-center gap-2"><FaFacebook className='text-blue-500 text-3xl'/>@tfico_facebook</Link>
        </span>
        <span title='Our Instagram'>
          <Link href="/instagram" className="flex items-center gap-2"><FaInstagram className='text-purple-500 text-3xl'/>@tfico_instagram</Link>
        </span>
        <span title='Our YouTube'>
          <Link href="/youtube" className="flex items-center gap-2"><FaYoutube className='text-red-500 text-3xl'/>@tfico_youtube</Link>
        </span>
        <span title='Our Twitter'>
          <Link href="/twitter" className="flex items-center gap-2"><FaXTwitter className='text-black text-3xl'/>@tfico_twitter</Link>
        </span>
      </div>
    </section>
  )
}

export default SocialMedia;