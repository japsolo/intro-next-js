import Link from 'next/link';

const Navbar = () => { 
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><a className="link">Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a className="link">About</a></Link>
        </li>
        <li>
          <Link href="/contact"><p className="link">Contact</p></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;