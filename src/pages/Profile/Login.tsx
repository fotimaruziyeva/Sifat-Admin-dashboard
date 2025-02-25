import { Input } from "@/components/ui/input";
import image from "../../assets/login.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
const Login = () => {
  return (
    <div className=" w-screen flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-1/2 h-[650px] rounded-2xl shadow-lg flex p-10 ">
        <div className="w-1/2 flex items-center justify-center p-4">
          <img src={image} alt="Login Image" className="w-full h-full"  />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-4 gap-7">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">
          LOGIN
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div className=" flex flex-col gap-4">
              <Label className="text-black">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="text-black "
                required
              />
            </div>
            <div className="  flex flex-col gap-4">
              <Label className="text-black">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                className="text-black"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              LOGIN
            </Button>
          </form>
          <div className="text-sm text-center mt-2">
            <Link to={"/register"} className="text-green-500 hover:underline">
              Create your account ➡️
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
