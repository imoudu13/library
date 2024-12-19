'use client'

import { useState } from "react"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <div className="flex border-b">
          <Button
            variant="ghost"
            className={`w-1/2 rounded-none ${
              isLogin
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </Button>
          <Button
            variant="ghost"
            className={`w-1/2 rounded-none ${
              !isLogin
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </Button>
        </div>
        <CardContent className="p-6">
          {isLogin ? <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} /> : <RegisterForm setIsLogin={setIsLogin} isLogin={isLogin} />}
        </CardContent>
      </Card>
    </main>
  )
}

