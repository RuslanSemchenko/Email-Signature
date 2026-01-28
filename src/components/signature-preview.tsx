"use client";

import React, { useState, useMemo } from 'react';
import type { SignatureData } from '@/lib/types';
import { generateSignatureHTML } from '@/lib/signature-template';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InstructionGuide } from '@/components/instruction-guide';
import { Smartphone, Monitor, Clipboard, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';

interface SignaturePreviewProps {
  data: SignatureData;
}

export function SignaturePreview({ data }: SignaturePreviewProps) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const imageUrls = useMemo(() => Object.fromEntries(
      PlaceHolderImages.map(p => [p.id, p.imageUrl])
    ), []);

  const htmlCode = useMemo(() => generateSignatureHTML(data, imageUrls), [data, imageUrls]);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    toast({
      title: 'Copied to Clipboard',
      description: 'You can now paste the signature into your email client.',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="html">Get Code</TabsTrigger>
        <TabsTrigger value="guide">Install</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  This is how your signature will look.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-muted p-1">
                <Button
                  variant={view === 'desktop' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('desktop')}
                  className="h-8 px-3"
                  aria-label="Desktop view"
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === 'mobile' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setView('mobile')}
                  className="h-8 px-3"
                  aria-label="Mobile view"
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="bg-muted/40 rounded-b-lg">
            <div
              className={cn(
                'mx-auto bg-white p-4 rounded-md shadow-inner transition-all duration-300 overflow-hidden',
                view === 'desktop' ? 'max-w-full' : 'max-w-sm'
              )}
            >
              <iframe
                srcDoc={htmlCode}
                title="Signature Preview"
                className="w-full border-0"
                style={{ height: '250px' }}
                sandbox="allow-same-origin"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="html" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>HTML Code</CardTitle>
            <CardDescription>
              Copy this code and paste it into your email client's signature settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted/40 p-4 rounded-md text-sm overflow-x-auto max-h-80">
                <code>{htmlCode}</code>
              </pre>
              <Button
                size="sm"
                className="absolute top-2 right-2"
                onClick={handleCopy}
              >
                {copied ? <Check className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
                <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="guide" className="mt-4">
        <InstructionGuide />
      </TabsContent>
    </Tabs>
  );
}
