"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";

export const RegisterForm = () => {
	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<CardWrapper
			headerLabel="Get started now"
			backButtonHref="/auth/login"
			backButtonLabel="Already have an account?"
			showSocial
		>
			<Form {...form}>
				<form></form>
			</Form>
		</CardWrapper>
	);
};
