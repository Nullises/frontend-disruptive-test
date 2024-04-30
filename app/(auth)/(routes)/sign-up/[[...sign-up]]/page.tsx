"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser, signIn } from "@/lib/appwrite";
import { SignupCard } from "@/app/components/signupCard";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  async function signup(form: any) {
    const isRegistered = await createUser(
      form.email,
      form.password,
      form.username
    );
    console.log("isRegistered", isRegistered);
    if (isRegistered) {
      router.push("/dashboard");
    }
  }

  return (
    <div>
      <SignupCard signup={signup} form={form} setForm={setForm} />
    </div>
  );
};

export default SignIn;
