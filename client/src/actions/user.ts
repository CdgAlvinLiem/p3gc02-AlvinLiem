"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function addUser(formData: FormData) {
  const userInput = {
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch("http://localhost:3000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  await res.json();
  redirect(`/login`);
}

export async function login(formData: FormData) {
  const userInput = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const { access_token } = await res.json();

  cookies().set("Authorization", `Bearer ${access_token}`);

  redirect(`/`);
}

export async function logout() {
  cookies().delete("Authorization");
  redirect("/users/login");
}
