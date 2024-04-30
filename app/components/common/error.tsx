import React from "react";
import Error from "next/error";

export function ErrorComponent(props: { title: any; statusCode: any }) {
  throw new Error({ title: props.title, statusCode: props.statusCode });
}
