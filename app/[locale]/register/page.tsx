'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
});

export default function Profile() {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            name: '',
            email: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        try {
            const response = await fetch('/api/register/123', {
                // Replace '123' with actual user ID
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('API response:', result);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className='grid justify-items-center p-20'>
            <Card className='w-full max-w-5xl bg-gray-50 sm:max-w-sm md:max-w-3xl'>
                <CardHeader className='flex items-center text-primary'>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='John Doe' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder='john@example.com' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button type='submit'>Update Profile</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
