import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return <div></div>;
}
