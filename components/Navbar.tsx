import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='logo'>
                <Image src="/icons/logo.png" alt="Logo" width={20} height={20} />
                <p>TraderEvent</p>
            </Link>

            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/events">Events</Link>
                <Link href="/">Create Event</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
