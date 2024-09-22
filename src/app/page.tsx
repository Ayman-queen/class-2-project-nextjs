import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col md:flex-row justify-between items-center p-10 bg-gray-100 bg-pulse">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 bg-green rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Hey,
            <br />
            My Name is <span className="text-gradient">Ayman Shaheen</span>
            <br />
            I am a <span className="text-gradient">Next.js Developer</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I specialize in building high-quality web applications using Next.js. I love exploring new technologies and constantly learning to improve my skills. When I'm not coding, you can find me enjoying nature or reading a good book.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <Image
              src="/hijab-girl.jpg"
              alt="Profile Picture"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-full border-4 border-pink-500 shadow-lg imageHoverEffect"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
