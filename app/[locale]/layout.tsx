import type { Metadata } from 'next';
import { Kantumruy_Pro } from 'next/font/google';
import '../globals.css';
import Footer from '@/components/footer/Index';
import { NavBar } from '@/components/navbar/navbar';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Script from 'next/script';

const kantumruy_pro = Kantumruy_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Cambodia GovTech Conference 2024: Empowering Digital Transformation in Government',
    description:
        'Join the premier Cambodia GovTech Conference 2024 in Phnom Penh. Explore cutting-edge technologies, innovative solutions, and best practices for digital government transformation. Connect with industry leaders, policymakers, and tech experts to shape the future of public services in Cambodia. Register now for insightful sessions, workshops, and networking opportunities',
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();
    return (
        <html lang={locale}>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                {/* Google Analytics */}
                <Script
                    src='https://www.googletagmanager.com/gtag/js?id=G-G7R0X97YX4'
                    strategy='afterInteractive'
                />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-G7R0X97YX4');
                    `}
                </Script>
            </head>
            <body className={kantumruy_pro.className}>
                <NextIntlClientProvider messages={messages}>
                    <NavBar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
