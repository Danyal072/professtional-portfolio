"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

export default function Form_Section() {
  const form = useForm(); // Initialize react-hook-form

  return (
    <>
      {/* Pass the form instance to the Form component */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="text">Name: </FormLabel>
                <FormControl>
                  <Input placeholder="e.g Danyal Ahmed" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="mail">Email: </FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="msg">Message: </FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
