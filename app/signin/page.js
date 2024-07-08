"use client";

import TextInput from "@/components/auth/TextInput";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-lg mx-auto py-12 px-16 bg-white border border-slate-200 rounded-xl">
        <h3 className="mb-5 text-3xl text-gray-500 font-semibold">Sign In</h3>
        <p className="mb-8 text-base text-gray-300 font-medium">
          Welcome back! Log in to continue.
        </p>
        <form action="#">
          <div className="flex flex-wrap -m-3">
            <TextInput
              label="Email"
              type="text"
              placeholder="Email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              setValue={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="mt-8 space-y-3">
          <Button text="Sign In" onClick={() => console.log("clicked")} />
        </div>
      </div>
    </section>
  );
}
