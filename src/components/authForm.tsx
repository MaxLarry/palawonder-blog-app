
import { useState } from "react";


const authForm = () => {
 
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Signup"}</h2>

      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-2 p-2 border"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border"
        />
        <button className="w-full bg-black text-white py-2">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="text-blue-500"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
}


export default authForm