"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});
export function Register() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return ( 
    <div className="grid justify-items-center">
      <Card className="bg-gray-50 lg:w-[950px] md:w-[650px] sm:w-[150px]">
        <CardHeader className="flex items-center text-primary">
          <CardTitle>Register Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex  items-center">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Frist Name</Label>
                <Input id="frist name" placeholder="Frist Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input id="last name" placeholder="Last Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="type"
                    render={() => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup className="flex flex-col space-y-1">
                            <FormItem className="flex items-center space-x-4 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="all" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Male
                              </FormLabel>
                              <FormControl>
                                <RadioGroupItem value="mentions" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Female
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone Number</Label>
                <Input id="phone number" placeholder="Phone Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Occupation</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Government Officia</SelectItem>
                    <SelectItem value="sveltekit">Employee</SelectItem>
                    <SelectItem value="astro">Professor</SelectItem>
                    <SelectItem value="nuxt">Monk</SelectItem>
                    <SelectItem value="nuxt">Student</SelectItem>
                    <SelectItem value="nuxt">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Work Place</Label>
                <Input id="work plce" placeholder="work place" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Position</Label>
                <Input id="positon" placeholder="Position" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Skill</Label>
                <Input id="skill" placeholder="Skill" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Country</Label>
                <Input id="country" placeholder="Country" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid justify-items-center">
          <Button className="text-white">Create Account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
