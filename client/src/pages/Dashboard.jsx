import { useState, useEffect } from 'react';
import api from '../api'; 
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

function Dashboard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = localStorage.getItem('userName');
        const token = localStorage.getItem('token');
        
        setUserName(storedName || 'Student');

        
        if (!token) {
            navigate('/login');
            return;
        }

      
        const response = await api.get('/courses'); 

        setCourses(response.data);
        
      } catch (error) {
        console.error("Error fetching courses:", error);
        
       
        if (error.response && error.response.status === 401) {
            localStorage.clear();
            navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
     
      
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, <span className="text-blue-600">{userName}</span>
            </h1>
            <p className="text-gray-500 mt-1">Pick up where you left off</p>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 mt-10">
        
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Available Courses</h2>
          <span className="text-gray-500 text-sm">{courses.length} courses found</span>
        </div>

        
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading your courses...</p>
          </div>
        ) : (
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.thumbnailUrl}
                  lessonCount={course.lessonCount}
                  progress={course.progress} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 bg-white rounded-lg shadow">
                <p className="text-gray-500">No courses available yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;