
import aboutImage from '../assets/image2.png'; 

function About() {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="h-64 bg-gray-900 relative overflow-hidden">
        <img 
            src={aboutImage} 
            alt="CHURCH IMAGE" 
            className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white shadow-lg">About Us</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose lg:prose-xl mx-auto text-gray-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="leading-relaxed mb-6 text-lg">
            Welcome to <strong>CourseBete</strong>. Our mission is to digitize and modernize the delivery of spiritual education. 
            We believe that the rich heritage of the Ethiopian Orthodox Tewahedo Church should be accessible to everyone, 
            regardless of where they live.
            </p>

            <p className="leading-relaxed mb-10 text-lg">
            Through this platform, we aim to connect students with high-quality resources on Geez language (Fidel), 
            Zema (Hymns), and Bible History, ensuring the torch of knowledge is passed to the next generation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="font-bold text-xl text-blue-800 mb-2">Accessibility</h3>
                    <p className="text-sm">Breaking geographical barriers so students abroad can learn their roots.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="font-bold text-xl text-green-800 mb-2">Technology</h3>
                    <p className="text-sm">Using modern tools like interactive quizzes and progress tracking to enhance learning.</p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="mb-4">We would love to hear from you. For inquiries regarding courses or technical support:</p>
            <ul className="list-none space-y-3 font-medium">
                <li>📍 Mekelle, Ethiopia</li>
                <li>📧 support@CourseBete.com</li>
                <li>📞 +251988278015</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default About;