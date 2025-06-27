// app/terms_of_use/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import NavBar from '@/components/NavBar';
export const metadata = {
  title: 'Terms of Use - Shivam Web Development', // Updated brand name
  description: 'Review the terms and conditions for using Shivam Web Development website.', // Updated brand name and escaped apostrophe
};

async function getTermsOfUseContent() {
  const filePath = path.join(process.cwd(), 'public', 'policy', 'terms-of-use.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export default async function TermsOfUsePage() {
  const termsOfUseMarkdown = await getTermsOfUseContent();

  return (
    <div className="min-h-screen flex flex-col bg-[#0A001A]">
      <NavBar />

      <main className="flex-grow flex justify-center py-20 px-4 mt-16 md:mt-24">
        <div className="container mx-auto max-w-4xl text-white relative z-10">
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <ReactMarkdown components={{}}>
              {termsOfUseMarkdown}
            </ReactMarkdown>
          </div>
        </div>
      </main>

    </div>
  );
}