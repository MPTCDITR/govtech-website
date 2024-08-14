'use client';

import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { userUpdateSchema } from '@/db/schema';
import type { UserUpdateInput } from '@/db/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface RegisterFormProps {
    userId: string;
}

export default function RegisterForm({ userId }: RegisterFormProps) {
    const router = useRouter();
    const form = useForm<UserUpdateInput>({
        resolver: zodResolver(userUpdateSchema),
    });

    const onSubmit = async (data: UserUpdateInput) => {
        try {
            const response = await fetch(`/api/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            router.push('/', { scroll: false });
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={50} />
                            </FormControl>
                            {form.formState.errors.firstName && (
                                <FormMessage>
                                    {form.formState.errors.firstName.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={50} />
                            </FormControl>
                            {form.formState.errors.lastName && (
                                <FormMessage>
                                    {form.formState.errors.lastName.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='gender'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className='flex flex-col space-y-1'
                                >
                                    <FormItem className='flex items-center space-x-3 space-y-0'>
                                        <FormControl>
                                            <RadioGroupItem value='male' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>Male</FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center space-x-3 space-y-0'>
                                        <FormControl>
                                            <RadioGroupItem value='female' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>Female</FormLabel>
                                    </FormItem>
                                    <FormItem className='flex items-center space-x-3 space-y-0'>
                                        <FormControl>
                                            <RadioGroupItem value='other' />
                                        </FormControl>
                                        <FormLabel className='font-normal'>Other</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            {form.formState.errors.gender && (
                                <FormMessage>
                                    {form.formState.errors.gender.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='phoneNumber'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder='(+855) 12 345 678' {...field} type='tel' />
                            </FormControl>
                            {form.formState.errors.phoneNumber && (
                                <FormMessage>
                                    {form.formState.errors.phoneNumber.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='occupation'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Occupation</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} />
                            </FormControl>
                            {form.formState.errors.occupation && (
                                <FormMessage>
                                    {form.formState.errors.occupation.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='workPlace'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Work Place</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} />
                            </FormControl>
                            {form.formState.errors.workPlace && (
                                <FormMessage>
                                    {form.formState.errors.workPlace.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='position'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} />
                            </FormControl>
                            {form.formState.errors.position && (
                                <FormMessage>
                                    {form.formState.errors.position.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='skill'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} />
                            </FormControl>
                            {form.formState.errors.skill && (
                                <FormMessage>{form.formState.errors.skill.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='country'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input {...field} maxLength={100} />
                            </FormControl>
                            {form.formState.errors.country && (
                                <FormMessage>
                                    {form.formState.errors.country.message}
                                </FormMessage>
                            )}
                        </FormItem>
                    )}
                />
                <CardFooter className='grid justify-items-center'>
                    <Button
                        type='submit'
                        disabled={form.formState.isSubmitting}
                        className='text-white'
                    >
                        {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </CardFooter>
            </form>
        </Form>
    );
}
