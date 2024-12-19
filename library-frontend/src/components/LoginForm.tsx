import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      <button type="submit">Submit</button>
    </form>
  );
}
