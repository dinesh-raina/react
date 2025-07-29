  import { useState, type MouseEvent } from "react";
  import { useNavigate } from "react-router-dom";

  const Login = () => {
    const [userName, setUserName] = useState<string>(''), [password, setPassword] = useState<string>(''); 
    const navigate = useNavigate();
    const handleSubmitBtn = (e: MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      if(userName == 'dinesh@g.in' && password == '12345')
        navigate('/dashboard');
      else
        alert('Wrong credentials');
    }
    return (
      <div className="min-h-screen bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" >
                Email
              </label>
              <input type="email" id="email" placeholder="Enter email here" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input type="password" id="password" placeholder="Enter password here" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"/>
            </div>
            <div>
              <button onClick={handleSubmitBtn} type="button" className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-2 rounded-md hover:bg-pink-600 transition duration-200">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Login;
