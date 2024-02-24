"use client"

import React, { FC } from "react";
import Image from "next/image";
import {
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const LoginModal: FC = () => {
	return (
		<div>
			<AlertDialogContent>
				<form className="flex flex-col gap-5">
					<AlertDialogHeader className="flex flex-col gap-3">
						<AlertDialogTitle>
							Login to your account
						</AlertDialogTitle>
                        <p>
                            Login to your account to access your dashboard
                        </p>

						<AlertDialogDescription className="flex flex-col items-center justify-center gap-5">
							<Input
								type="text"
								placeholder="Email"
								className="w-full"
							/>
							<Input
								type="password"
								placeholder="Password"
								className="w-full"
							/>
							<Button className="w-full">Login</Button>
							<Separator className="my-4" />
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="flex flex-col">
						<Button
                            variant="outline"
                        >
                            <span>
                                Login with {" "}
                            </span>
							<Image
                                src="https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg"
                                alt="Auth0"
                                width={20}
                                height={20}
                            />
						</Button>
						<AlertDialogCancel>Cancel Login</AlertDialogCancel>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</div>
	);
}

export default LoginModal;