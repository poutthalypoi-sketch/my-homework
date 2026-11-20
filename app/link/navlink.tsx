'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Register', href: '/signup' },
    { name: 'Logout', href: '/login' },
     { name: 'Dark:Light', href: '/them' },
    
  ]

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className='bg-blue-700 text-white font-medium  px-3 py-1.5 rounded-lg hover:bg-blue-900 transition-colors '
              
                 
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}