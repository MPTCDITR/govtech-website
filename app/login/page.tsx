import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1">
      <div className="flex items-center">
        <form className="w-full justify-between px-4 lg:px-20">
          <div className="w-full space-y-6">
            <div className="grid justify-items-center px-20">
              <Label>Logo</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username / Phone Number</Label>
              <Input id="frist name" placeholder="Frist Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="last name" placeholder="Last Name" />
            </div>
            <div className="flex justify-between">
              <Button className="text-white" type="submit">
                Login
              </Button>
              <Button className="bg-gray-200 hover:bg-secondary hover:text-white" type="submit">
                back
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <img src="/login.png" alt="" />
      </div>
    </div>
  );
}
