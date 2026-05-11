import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        padding: '15px 30px',
        backgroundColor: '#c1d0f2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Left Side Logo */}
      <img
        src="/logo.png"
        alt="Company Logo"
        style={{
          width: '250px',
          height: '70px',
          objectFit: 'contain'
        }}
      />

      {/* Right Side Navigation */}
      <nav
        style={{
          display: 'flex',
          gap: '25px'
        }}
      >
        <Link
          to="/"
          style={{
            color: 'blue',
            textDecoration: 'none',
            fontFamily:'-apple-system',
            fontWeight:'bold'
          }}
        >
        
        </Link>

        <Link
          to="/webinars"
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
        >
        
        </Link>

        <Link
          to="/contact"
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
        >
        
        </Link>
      </nav>
    </header>
  );
}