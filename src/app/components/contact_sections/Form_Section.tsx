"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


import { z } from "zod"
import { useForm } from 'react-hook-form'


export default function Form_Section() {
  const form = useForm()
  return (
    <>  
        <Form>
         <form onSubmit={form.handleSubmit((data) => { console.log(data) })}> 
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor="text">Name: </FormLabel>
              <FormControl>
                <Input placeholder='e.g Danyal Ahmed' {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mail"
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor="mail">Email: </FormLabel>
              <FormControl>
                <Input placeholder='example@mail.com' {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="msg"
          render={({field}) => (
            <FormItem>
              <FormLabel htmlFor="mail">Email: </FormLabel>
              <FormControl>
                <Textarea placeholder='Write your Message....' {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        </form>
      </Form> 

    </>
  )
}
