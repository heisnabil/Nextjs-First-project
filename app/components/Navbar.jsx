"use client";

import Link from "next/link";
import { useState } from "react";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          NabilBlog
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="auth-section">
          {isSignedIn ? (
            <div className="user-info">
              <span className="user-name">Hey, {user.firstName}!</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          )}
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="mobile-auth">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="btn btn-primary">Sign In</button>
              </SignInButton>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}