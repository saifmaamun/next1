import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* mobile menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* large display */}
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
      <li>
        <details>
        <summary>

          <Link href='/news'>News</Link>
        </summary>
          <ul className="p-2">
            <li><Link href="/news/blog">Blog</Link></li>
            
          </ul>
        </details>
      </li>
      <li>
        <details>
        <summary>

          <Link href='/dashboard'>Dashboard</Link>
        </summary>
          <ul className="p-2">
            <li><Link href="/dashboard/admin">Admin</Link></li>
            <li><Link href="/dashboard/user">User</Link></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;