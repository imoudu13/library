import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    role: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.username === "") {
      toast({
        title: "Error",
        description: "Username cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password === "") {
      toast({
        title: "Error",
        description: "Password cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    if (formData.email === "") {
      toast({
        title: "Error",
        description: "Email cannot be empty.",
        variant: "destructive",
      });
      return;
    } else if (!formData.email.includes("@")) {
      toast({
        title: "Error",
        description: "Please enter a correct email.",
        variant: "destructive",
      });
      return;
    }

    if (formData.firstname === "") {
      toast({
        title: "Error",
        description: "First name cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    if (formData.lastname === "") {
      toast({
        title: "Error",
        description: "Last name cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="username">Username: </Label>
        <Input
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="email">Email: </Label>
        <Input
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="password">Password: </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="firstname">First name: </Label>
        <Input
          id="firstname"
          name="firstname"
          placeholder="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="lastname">Last name: </Label>
        <Input
          id="lastname"
          name="lastname"
          placeholder="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
