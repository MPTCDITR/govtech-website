"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Profile() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="grid justify-items-center p-20">
      <Card className="w-full max-w-5xl bg-gray-50 sm:max-w-sm md:max-w-3xl">
        <CardHeader className="flex items-center text-primary">
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex items-center">
            <div className="grid w-full items-center gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Frist Name</Label>
                <Input id="frist name" placeholder="Sok" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input id="last name" placeholder="Socheata" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup className="space-y-1">
                            <FormItem className="flex items-center space-x-4 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="all" />
                              </FormControl>
                              <FormLabel className="font-normal">Male</FormLabel>
                              <FormControl>
                                <RadioGroupItem value="mentions" />
                              </FormControl>
                              <FormLabel className="font-normal">Female</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone number">Phone Number</Label>
                <Input id="phone number" placeholder="0987654321" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="soksocheata@gmail.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
              <div className=" space-y-1.5">
                <Label htmlFor="confirm password">Confirm Password</Label>
                <Input type="password" id="confirm password" placeholder="Confirm Password" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="occupation">Occupation</Label>
                <Select>
                  <SelectTrigger id="select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="government officia">Government Officia</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="professor">Professor</SelectItem>
                    <SelectItem value="monk">Monk</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="other">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="work place">Work Place</Label>
                <Input id="work plce" placeholder="Work Place" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="position">Position</Label>
                <Input id="positon" placeholder="Position" />
              </div>
              <div className=" space-y-1.5">
                <Label htmlFor="skill">Skill</Label>
                <Input id="skill" placeholder="Skill" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Country" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
