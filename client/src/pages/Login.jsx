import React from 'react'

const Login = () => {
  return (
    <div className="bg-zinc-950 min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-[#121212] rounded-lg shadow-lg overflow-hidden border-[0.1px] border-zinc-700">
        <div className="p-8">
          <h1 className="text-2xl text-white font-bold text-center mb-6">Sign In</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="your@email.com" 
                className="w-full p-3 rounded-md bg-[#282828] border border-zinc-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f0533e] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                className="w-full p-3 rounded-md bg-[#282828] border border-zinc-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f0533e] focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-gray-300 font-semibold hover:text-[#ffa48f] transition-colors">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-[#f0533e] hover:bg-[#f56952] text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#fa7e66] focus:ring-offset-2 focus:ring-offset-[#121212]"
            >
              Sign In
            </button>
          </form>
        </div>
        
        <div className="py-4 px-8 bg-[#282828] text-center">
          <p className="text-gray-300 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-[#ffa48f] hover:text-[#ffb7a5] font-medium transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;