import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-400 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center flex flex-col items-center">
        <Image 
          src="/profile.jpg" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full" 
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">John Doe</h1>
        <p className="text-gray-600 mt-2">Full-Stack Developer | Tech Enthusiast</p>
        <p className="text-gray-500 mt-4 text-center">
          Passionate about building scalable web applications and exploring new technologies.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/johndoe" target="_blank" className="text-gray-800 hover:text-blue-500">GitHub</a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" className="text-gray-800 hover:text-blue-500">LinkedIn</a>
          <a href="mailto:johndoe@example.com" className="text-gray-800 hover:text-blue-500">Email</a>
        </div>
      </div>
    </div>
  );
}
