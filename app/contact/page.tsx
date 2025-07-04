// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Shivam Web Development - Get In Touch',
  description: 'Reach out to Shivam Web Development for inquiries, projects, or collaborations. Fill out the contact form to get in touch.',
};

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A001A]">
      <NavBar />

      <main className="flex-grow flex items-center justify-center py-20 px-4 mt-16 md:mt-24">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight text-[#f8f4fb]"
          >
            Let&apos;s <span className="text-[#892CDC]">Connect</span>
          </h1>

          <p
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? Use the form below to send me a message directly.
          </p>

          <div
            className="w-full max-w-lg mx-auto"
          >
            <ContactForm />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-[#892CDC] hover:bg-[#6e22a8] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </main>

    </div>
  );
};

export default ContactPage;