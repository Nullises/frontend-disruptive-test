"use client";
import React, { useState } from "react";
import { LoginCard } from "@/app/components/loginCard";
import { useRouter } from "next/navigation";
import { signIn, account } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const { setIsLogged, setUser } = useGlobalContext();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function login(form: any) {
    const isSigned = await signIn(form.email, form.password);
    if (isSigned) {
      setIsLogged(true);
      setUser(isSigned);
      router.push("/dashboard");
    }
  }

  return (
    <div>
      <LoginCard login={login} form={form} setForm={setForm} />
    </div>
  );
};

export default SignIn;
