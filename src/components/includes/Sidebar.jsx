import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    b2b: false,
    bookingManagement: false,
  });

  const location = useLocation();

  const toggleMenu = (menu) => {
    setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) => location.pathname === path;

  const isParentActive = (paths) => paths.some((path) => location.pathname.startsWith(path));

  const getLinkClass = (path) =>
    `flex items-center p-2 rounded-md text-sm font-medium ${isActive(path) ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-blue-50'} transition-colors duration-300`;

  const getParentClass = (paths) =>
    `flex items-center justify-between p-2 rounded-md text-sm font-medium cursor-pointer ${isParentActive(paths) ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-blue-50'} transition-colors duration-300`;

  return (
    <aside className="bg-gray-50 w-64 h-screen hidden md:block shadow-md">
      <div className="p-4">
        <ul>
          <li className="">
            <Link to="/issue-request" className={getLinkClass('/issue-request')}>
              <span className="text-xl">📄</span>
              <span className="ml-2">Issue Request</span>
            </Link>
          </li>

          <li className="">
            <Link to="/deposit-request" className={getLinkClass('/deposit-request')}>
              <span className="text-xl">💸</span>
              <span className="ml-2">Deposit Request</span>
            </Link>
          </li>

          {/* Multi-Level Menu: B2B */}
          <li className="">
            <div
              onClick={() => toggleMenu('b2b')}
              className={getParentClass([
                '/b2b/all-booking',
                '/b2b/issue-request',
                '/b2b/issue-in-progress',
                '/b2b/ticketed',
                '/b2b/issue-history',
              ])}
            >
              <div className="flex items-center">
                <span className="text-xl">🛒</span>
                <span className="ml-2">B2B</span>
              </div>
              <span>{isOpen.b2b ? '▲' : '▼'}</span>
            </div>
            <div
              className={`ml-4 mt-2 space-y-2 transition-max-height duration-300 overflow-hidden ${isOpen.b2b ? 'max-h-40' : 'max-h-0'}`}
            >
              <ul>
                <li>
                  <Link to="/b2b/all-booking" className={getLinkClass('/b2b/all-booking')}>
                    All Booking
                  </Link>
                </li>
                <li>
                  <Link to="/b2b/issue-request" className={getLinkClass('/b2b/issue-request')}>
                    Issue Request
                  </Link>
                </li>
                <li>
                  <Link to="/b2b/issue-in-progress" className={getLinkClass('/b2b/issue-in-progress')}>
                    Issue In Progress
                  </Link>
                </li>
                <li>
                  <Link to="/b2b/ticketed" className={getLinkClass('/b2b/ticketed')}>
                    Ticketed
                  </Link>
                </li>
                <li>
                  <Link to="/b2b/issue-history" className={getLinkClass('/b2b/issue-history')}>
                    Issue History
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Multi-Level Menu: Booking Management */}
          <li className="">
            <div
              onClick={() => toggleMenu('bookingManagement')}
              className={getParentClass([
                '/booking-management/partial-payment',
                '/booking-management/sales-executive',
              ])}
            >
              <div className="flex items-center">
                <span className="text-xl">📚</span>
                <span className="ml-2">Booking Management</span>
              </div>
              <span>{isOpen.bookingManagement ? '▲' : '▼'}</span>
            </div>
            <div
              className={`ml-4 mt-2 space-y-2 transition-max-height duration-300 overflow-hidden ${isOpen.bookingManagement ? 'max-h-20' : 'max-h-0'}`}
            >
              <ul>
                <li>
                  <Link to="/booking-management/partial-payment" className={getLinkClass('/booking-management/partial-payment')}>
                    Partial Payment
                  </Link>
                </li>
                <li>
                  <Link to="/booking-management/sales-executive" className={getLinkClass('/booking-management/sales-executive')}>
                    Sales Executive (KAM)
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* More items can be added here */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
