import { BookOpen, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CourseCard({ id, title, description, image, lessonCount, progress }) { 
  const navigate = useNavigate();

  
  const getButtonText = () => {
    if (progress === 100) return "Review Course";
    if (progress > 0) return "Continue Learning";
    return "Start Learning";
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col h-full" 
      onClick={() => navigate(`/course/${id}`)}
    >
      
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={image || "https://via.placeholder.com/400x250"} 
          alt={title} 
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4 flex justify-between items-end">
            <span className="text-white text-xs font-bold px-2 py-1 bg-blue-600 rounded-full">
                Free Course
            </span>
            
            
            {progress > 0 && (
                <span className="text-white text-xs font-bold px-2 py-1 bg-green-600 rounded-full shadow-sm">
                    {progress}% Done
                </span>
            )}
        </div>
      </div>


      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
          {description}
        </p>

    
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4 overflow-hidden border border-gray-200">
            <div 
                className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${
                    progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progress || 0}%` }}
            ></div>
        </div>

        <div className="flex items-center justify-between text-gray-400 text-sm border-t pt-4 mt-auto">
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            <span>{lessonCount || 0} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>2h 15m</span>
          </div>
        </div>

      
        <button 
            onClick={(e) => {
                e.stopPropagation(); 
                navigate(`/course/${id}`);
            }} 
            className={`w-full mt-4 font-bold py-2 rounded-lg transition-colors
                ${progress === 100 
                    ? 'bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white' 
                    : 'bg-gray-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                }
            `}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;