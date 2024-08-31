// src/components/Navbar.js
const Navbar = () => {

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">tripfindy</div>
          
          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">All Booking</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Issue Request</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Issue In Progress</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Deposit Request</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Partial Payment</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600">🔔</button>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Welcome!</span>
            <span className="font-bold text-blue-600">Sub Admin</span>
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
