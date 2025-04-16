"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

type FormData = z.infer<typeof formSchema>;

export function WaitlistForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: FormData) {
        try {
            // TODO: Replace with your API endpoint
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to join waitlist");
            }

            reset();
        } catch (error) {
            console.error("Error joining waitlist:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
            <div className="flex flex-col space-y-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full"
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
        </form>
    );
}
