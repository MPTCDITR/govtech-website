// app/[locale]/register/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';
import RegisterForm from './register-form';

export default async function Register() {
    const { user } = await validateRequest();

    if (!user) {
        redirect('/login');
    }

    return (
        <div className='grid justify-items-center p-20'>
            <Card className='w-full max-w-5xl bg-gray-50 sm:max-w-sm md:max-w-3xl'>
                <CardHeader className='flex items-center text-primary'>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm userId={user.id} />
                </CardContent>
            </Card>
        </div>
    );
}
