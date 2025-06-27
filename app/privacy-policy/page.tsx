// app/privacy_policy/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Privacy Policy - Shivam Web Development', // Updated brand name
  description: 'Understand how Shivam Web Development collects, uses, and protects your personal data.', // Updated brand name and handled apostrophe
};

async function getPrivacyPolicyContent() {
  const filePath = path.join(process.cwd(), 'public', 'policy', 'privacy-policy.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export default async function PrivacyPolicyPage() {
  const privacyPolicyMarkdown = await getPrivacyPolicyContent();

  return (
    <div className="min-h-screen flex flex-col bg-[#0A001A]">
      <NavBar />

      <main className="flex-grow flex justify-center py-20 px-4 mt-16 md:mt-24">
        <div className="container mx-auto max-w-4xl text-white relative z-10">
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <ReactMarkdown components={{}}>
              {privacyPolicyMarkdown}
            </ReactMarkdown>
          </div>
        </div>
      </main>

    </div>
  );
}