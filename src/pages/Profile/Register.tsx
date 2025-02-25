import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import image from "../../assets/login.png";

export default function Register() {
  return (
    <div className=" w-screen flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-1/2 h-[650px] rounded-2xl shadow-lg flex p-10 ">
        <div className="w-1/2 flex items-center justify-center p-4">
          <img src={image} alt="Login Image" className="w-full h-full" />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-2 gap-7">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">
            Sign Up
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <Label className="text-gray-600">Ismingizni kiriting</Label>
              <Input
                type="text"
                placeholder="Ismingizni kiriting"
                className="text-black "
                required
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label className="text-gray-600">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="text-black "
                required
              />
            </div>
            <div className="  flex flex-col gap-2">
              <Label className="text-gray-600">Parol kiriting</Label>
              <Input
                type="password"
                placeholder="Password"
                className="text-black"
                required
              />
            </div>

            <div className="  flex flex-col gap-2">
              <Label className="text-gray-600">Parolni takrorlang </Label>
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
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
