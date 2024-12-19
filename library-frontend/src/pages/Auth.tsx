import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Button } from "@/components/ui/button";

import { useState } from "react";
export default function Auth() {
  const [login, setLogin] = useState(false);
  const loginString: string = "Login";
  const registerString: string = "Register";

  const changeForm = () => {
    setLogin(!login);
  };

  return (
    <main>
      <div>
        <Button onClick={changeForm}>
          {login ? loginString : registerString}
        </Button>
        {login ? <LoginForm /> : <RegisterForm />}
      </div>
    </main>
  );
}
