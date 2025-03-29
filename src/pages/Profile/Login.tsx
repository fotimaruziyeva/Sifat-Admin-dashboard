"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_REQUEST } from "@/lib/apiRequest";
import { toast } from "sonner";
import Cookies from "js-cookie";


const Login = () => {
  const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

  
  const handleLogin = async () => {
    const data = {
      username,
      password,
    };
  
    try {
      const response = await axios.post(API_REQUEST.login, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
  
      toast.success("Muvaffaqiyatli kirdingiz!", {
        position: "top-center",
      });
  
      console.log(response.data);
      Cookies.set('access_token', response.data.access_token)
      Cookies.set('refresh', response.data.refresh)
      navigate("/");
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring!", {
        position: "top-center",
      });
  
      console.error(error);
    }
  };
  
  


  return (
    <div className='w-screen h-screen flex items-center justify-center'>
    <div className='w-96 p-5 rounded-sm shadow-sm border border-solid border-[#00000025] flex flex-col gap-4'>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='username'>Username</Label>
        <Input
          type='email'
          id='username'
          placeholder='Username'
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button type='submit' onClick={handleLogin}>
        Login
      </Button>
    </div>
  </div>
  );
};

export default Login;
