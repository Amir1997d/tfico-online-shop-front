import '@styles/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Head } from 'next/document';


export const metadata = {
    title: 'TFICo',
    description: 'industerial knife online store/shop to buy or order',
    icons: {
        icon: '/assets/images/tfi-logo-2.png'
    }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <header>
                <Header />
            </header>
            <main className='app'>
                { children }
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
    </html>
  )
}

export default RootLayout;