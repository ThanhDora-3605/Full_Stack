import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

export function DialogLogin({ open, setOpen }) {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      return;
    } else {
      return;
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button className="bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 rounded-3xl px-4 py-6 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#FC8A06] flex items-center justify-center">
            <User className="w-4 h-4 text-[#1A1A1A]" />
          </div>
          <span>Login/Signup</span>
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-3xl border p-6 shadow-lg duration-200 outline-none sm:max-w-[425px]"
          )}
        >
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <DialogPrimitive.Title className="text-lg leading-none font-semibold">
              {isLogin ? "Login" : "Sign Up"}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="text-muted-foreground text-sm">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Create a new account to get started"}
            </DialogPrimitive.Description>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            {!isLogin && (
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required={!isLogin}
                  className="rounded-3xl"
                />
              </div>
            )}
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                required
                className="rounded-3xl"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-3xl"
              />
            </div>
            {!isLogin && (
              <div className="grid gap-3">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required={!isLogin}
                  className="rounded-3xl"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full rounded-3xl">
                {isLogin ? "Login" : "Sign Up"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsLogin(!isLogin)}
                className="w-full rounded-3xl"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </Button>
            </div>
          </form>
          <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
