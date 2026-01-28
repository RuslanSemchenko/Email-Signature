"use client";

import type { SignatureData } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  User,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Globe,
  Link as LinkIcon,
  Image as ImageIcon,
} from 'lucide-react';
import React from 'react';

interface SignatureFormProps {
  data: SignatureData;
  setData: React.Dispatch<React.SetStateAction<SignatureData>>;
}

const socialIcons = {
  linkedin: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="#0077B5"/>
    </svg>
  ),
  whatsapp: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366"/>
    </svg>
  ),
  wechat: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2">
        <title>WeChat</title>
        <path d="M12 0C5.373 0 0 4.625 0 10.333c0 3.016 1.51 5.69 3.864 7.492-.234 1.2-.934 3.73-1.123 4.45H2.8c.28-.59.757-1.574 1.152-2.31.226-.42.43-.84.6-1.245.023-.05.048-.1.07-.15C5.88 18.96 7.02 19.5 9 19.5c.09 0 .18-.002.27-.006 1.125-.05 2.18-.33 3.12-.8.59-.29.96-.93.8-1.6-.17-.7-.8-1.16-1.53-1-1.2.25-2.48.03-3.58-.65-.6-.39-.88-.97-.88-1.63 0-.4.16-.78.46-1.07.72-.69 1.63-1.04 2.65-1.04.83 0 1.58.24 2.25.7.3.2.68.3 1.05.3.7 0 1.34-.4 1.66-1.06.32-.66.16-1.45-.37-1.95-1.18-1.09-2.6-1.67-4.14-1.67-2.32 0-4.42.96-5.88 2.54-.6.64-.93 1.48-.93 2.37 0 1.2.56 2.28 1.47 2.96.4.29.63.78.63 1.28 0 .66-.36 1.27-.93 1.63-.45.28-.93.5-1.43.66C3.33 16.5 3 16.27 3 15.9c0-1.16.5-2.2 1.33-2.98.53-.5.8-1.2.8-1.92 0-1.08-.5-2.07-1.32-2.8-.9-.8-2.03-1.2-3.2-1.2C.31 7 0 6.69 0 6.3c0-.98.9-3.23 2.6-4.4C4.3 1 6.13 0 9 0c3.74 0 7.5 1.74 7.5 1.74-.75.76-1.74 1.9-1.74 1.9S13.43 3.05 12 3.05c-1.33 0-2.53.53-3.4 1.4-.84.86-1.3 2-1.3 3.25 0 .6.2.9.4.9.2 0 .4-.3.4-.9 0-.9.3-1.7.9-2.3.6-.6 1.4-.9 2.3-.9 1.1 0 2.1.4 2.9 1.2.8.8 1.2 1.8 1.2 2.9s-.4 2.1-1.2 2.9c-.8.8-1.8 1.2-2.9 1.2-.5 0-.9-.2-1.2-.4-.3-.2-.7-.3-1.1-.1-.4.2-.6.6-.5 1 .2.7.9.9 1.4.9.9 0 1.8-.2 2.6-.6.3-.1.6-.2.9-.2.7 0 1.3.4 1.5 1 .2.6 0 1.3-.5 1.7-1.1 1-2.6 1.5-4.1 1.5-2.6 0-5-1-6.7-2.8-.4-.4-.6-.9-.6-1.4 0-.4.2-.7.5-.9.4-.3.9-.4 1.4-.4.6 0 1.2.2 1.7.6.5.4 1.2.6 1.8.6.9 0 1.7-.3 2.4-.9.7-.6 1-1.4.9-2.3-.1-.9-.7-1.6-1.5-1.9-1.3-.4-2.7-.2-3.8.7-.5.4-.8.9-.8 1.5 0 .7.4 1.4 1 1.8.3.2.4.5.4.8 0 .4-.2.7-.5.9-.6.4-1.3.6-2.1.6-3.23 0-6.1-2.1-6.1-5.3C.1 5.09 5.46.26 12 .26c2.9 0 5.4 1.1 7.2 2.8.1.1.2.2.3.3.7.8 1 1.8 1 2.8 0 1.3-.6 2.5-1.7 3.4-1.2 1-2.7 1.5-4.3 1.5-1.8 0-3.4-.6-4.7-1.8-.5-.5-.8-1.2-.8-2 0-1.1.5-2.1 1.4-2.8.9-.7 2.1-1.2 3.3-1.2 1.6 0 3.1.6 4.3 1.8.5.5.8 1.2.8 1.9 0 1.1-.5 2.1-1.4 2.8-.9.7-2.1 1.2-3.3 1.2-.9 0-1.8-.3-2.5-.8-.7-.5-1-1.3-1-2.2s.3-1.7 1-2.2c.7-.5 1.5-.8 2.5-.8s1.8.3 2.5.8c.7.5 1 1.3 1 2.2s-.3 1.7-1 2.2c-.7.5-1.5.8-2.5.8-2.3 0-4.4-.9-6-2.5-.6-.6-.9-1.4-.9-2.2 0-1.1.5-2.1 1.4-2.8.9-.7 2.1-1.2 3.3-1.2 1.6 0 3.1.6 4.3 1.8C20.9 8.5 24 12.3 24 12.3c0 4.2-3.5 7.2-3.5 7.2-1.3 1.1-2.8 1.6-4.4 1.6-.04 0-.08 0-.12 0-3.14-.15-5.88-2-7.2-4.5H8.8c-.3.8-.5 1.5-.6 2.2-.4 3.3 2.2 4.5 2.2 4.5s2.3-1.1 2.7-3.9h.1c.3.8.7 1.6 1.2 2.3l.7.9c.4.5 1.2.6 1.7.2.5-.4.6-1.2.2-1.7l-1-1.2c-.5-.6-.9-1.3-1.2-2.1h.1c2.1 1.3 4.6 1.5 6.9.6 2.2-.8 3.6-2.8 3.6-5 0-3.1-2.1-5.6-4.9-6.5-2.4-.8-4.9-.4-6.8 1.1z" fill="#09B83E"/>
    </svg>
  ),
};

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, icon, ...props }) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="flex items-center">
      {icon}
      {label}
    </Label>
    <Input id={id} name={id} {...props} />
  </div>
);

export function SignatureForm({ data, setData }: SignatureFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Signature Details</CardTitle>
        <CardDescription>
          Enter your information to generate a signature.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          id="name"
          label="Full Name"
          icon={<User className="w-4 h-4 mr-2" />}
          value={data.name}
          onChange={handleChange}
          placeholder="e.g., John Doe"
        />
        <FormField
          id="title"
          label="Title / Position"
          icon={<Briefcase className="w-4 h-4 mr-2" />}
          value={data.title}
          onChange={handleChange}
          placeholder="e.g., Senior Executive"
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          icon={<Mail className="w-4 h-4 mr-2" />}
          value={data.email}
          onChange={handleChange}
          placeholder="e.g., john.doe@example.com"
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          icon={<Phone className="w-4 h-4 mr-2" />}
          value={data.phone}
          onChange={handleChange}
          placeholder="e.g., +1 (123) 456-7890"
        />
        <FormField
          id="address"
          label="Physical Address"
          icon={<MapPin className="w-4 h-4 mr-2" />}
          value={data.address}
          onChange={handleChange}
          placeholder="e.g., 123 Corporate Lane, Metropolis"
        />
        <FormField
          id="website"
          label="Website URL"
          type="url"
          icon={<Globe className="w-4 h-4 mr-2" />}
          value={data.website}
          onChange={handleChange}
          placeholder="e.g., https://www.example.com"
        />
        <FormField
          id="logoUrl"
          label="Company Logo URL"
          type="url"
          icon={<ImageIcon className="w-4 h-4 mr-2" />}
          value={data.logoUrl}
          onChange={handleChange}
          placeholder="URL to your company logo"
        />
        <div className="space-y-2 pt-4 border-t">
          <h3 className="text-sm font-medium text-muted-foreground">Social Links</h3>
           <FormField
            id="linkedin"
            label="LinkedIn URL"
            type="url"
            icon={socialIcons.linkedin}
            value={data.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
          />
           <FormField
            id="whatsapp"
            label="WhatsApp URL"
            type="url"
            icon={socialIcons.whatsapp}
            value={data.whatsapp}
            onChange={handleChange}
            placeholder="https://wa.me/..."
          />
           <FormField
            id="wechat"
            label="WeChat URL"
            type="url"
            icon={socialIcons.wechat}
            value={data.wechat}
            onChange={handleChange}
            placeholder="https://web.wechat.com/..."
          />
        </div>
      </CardContent>
    </Card>
  );
}
