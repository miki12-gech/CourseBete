import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight, PlayCircle } from 'lucide-react';

import heroImage from '../assets/image1.png'; 

function Home() {
  return (
    <div className="bg-white">
      

      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        
     
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
        
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Master the Wisdom of <br/> <span className="text-blue-300">The Ancient Church</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Access premium courses on Geez, Bible History, and Theology. Track your progress, take quizzes, and grow in faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/register" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                Start Learning <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition">
                Learn More
                </Link>
            </div>
          </div>

   
          <div className="md:w-1/2 flex justify-center">
             <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-sm shadow-2xl">
                <img 
                    src={heroImage} 
                    alt="Senbet Tmhrt Education" 
                    className="rounded-xl w-full max-w-md object-cover shadow-lg transform rotate-2 hover:rotate-0 transition duration-500"
                />
             </div>
          </div>
        </div>
      </div>

     
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Senbet Tmhrt?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We provide a structured and interactive way to learn, combining tradition with modern technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
           
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Structured Curriculum</h3>
                <p className="text-gray-500 leading-relaxed">Courses are designed by experts, taking you from beginner to advanced levels step-by-step.</p>
            </div>

            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                    <PlayCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Video Lessons</h3>
                <p className="text-gray-500 leading-relaxed">Watch high-quality video lectures and read supplementary materials at your own pace.</p>
            </div>

           
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-green-600">
                    <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Earn Certificates</h3>
                <p className="text-gray-500 leading-relaxed">Complete quizzes and pass assessments to track your growth and earn recognition.</p>
            </div>
          </div>
        </div>
      </div>

 
      <div className="bg-slate-900 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-slate-300 text-lg mb-8">Join our community today and begin learning immediately. It's free and easy.</p>
            <Link to="/register" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                Create Free Account
            </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;