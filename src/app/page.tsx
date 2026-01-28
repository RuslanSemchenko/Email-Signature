"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { SignatureForm } from '@/components/signature-form';
import { SignaturePreview } from '@/components/signature-preview';
import type { SignatureData } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const initialLogoUrl = useMemo(
    () => PlaceHolderImages.find((p) => p.id === 'company-logo')?.imageUrl || '',
    []
  );

  const [signatureData, setSignatureData] = useState<SignatureData>({
    name: 'John Doe',
    title: 'Senior Executive, Marketing',
    phone: '+1 (123) 456-7890',
    email: 'john.doe@examplecorp.com',
    address: '123 Corporate Lane, Suite 500, Metropolis, USA 12345',
    website: 'https://www.examplecorp.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    whatsapp: 'https://wa.me/11234567890',
    wechat: 'https://web.wechat.com/',
    logoUrl: initialLogoUrl,
  });

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Email Signature Architect
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Craft a professional, responsive, and universally compatible email
          signature in seconds.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2">
          <SignatureForm data={signatureData} setData={setSignatureData} />
        </div>
        <div className="lg:col-span-3">
          <SignaturePreview data={signatureData} />
        </div>
      </div>
       <footer className="text-center mt-12 text-sm text-muted-foreground">
        <p>Built for universal email client compatibility.</p>
        {year && <p>&copy; {year} Email Signature Architect. All Rights Reserved.</p>}
      </footer>
    </main>
  );
}
