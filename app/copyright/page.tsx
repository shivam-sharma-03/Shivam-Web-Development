// app/copyright_policy/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Copyright Policy - Shivam Web Development', // Changed 'Shiv\'s Portfolio' to 'Shivam Web Development'
  description: 'Understand the copyright terms and intellectual property rights for Shivam Web Development.', // Changed 'Shiv\'s Portfolio' to 'Shivam Web Development' and escaped apostrophe
};

async function getCopyrightPolicyContent() {
  const filePath = path.join(process.cwd(), 'public', 'policy', 'copyright-policy.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export default async function CopyrightPolicyPage() {
  const copyrightPolicyMarkdown = await getCopyrightPolicyContent();

  return (
    <div className="min-h-screen flex flex-col bg-[#0A001A]">
      <NavBar />

      <main className="flex-grow flex justify-center py-20 px-4 mt-16 md:mt-24">
        <div className="container mx-auto max-w-4xl text-white relative z-10">
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <ReactMarkdown components={{}}>
              {copyrightPolicyMarkdown}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}