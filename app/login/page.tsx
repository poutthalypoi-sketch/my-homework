'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



export default function LoginPage() {
  const router = useRouter();
    const [Name, setName]=useState('');
    const [password,setPassword]= useState('');
    const [Error, setError]= useState('');

    const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
     if (password === "1234") {
      
       router.push('/dashboard')
     } else {
      
       setError('Your passord is wrong ')
     }

   }
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white flex flex-col justify-center items-center p-4 transition-colors duration-300">
        
        <div className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login </h1>
          
        </div>
            <form onSubmit={handleLogin} className="space-y-4">
            
                <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)
                
              }
              
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121212] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required
              placeholder="••••••••" 
              
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121212] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer shadow-md mt-2" 

          >
            Sign In
          </button>
        </form>
        </div>

    </main>
    
  )
}


