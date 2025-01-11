import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <h1 className="text-primary text-2xl font-bold">QTechy</h1>
            </Link>
            <span className="text-xs text-gray-500">BUS TICKET BOOKING SYSTEM</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/bus-booking/dashboard" className="text-gray-700 hover:text-primary">Dashboard</Link>
            <Link to="/bus-booking/login" className="text-gray-700 hover:text-primary">Login</Link>
            <Link 
              to="/bus-booking/booking" 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
            >
              BUY TICKETS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}