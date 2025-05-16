import React from 'react';
import { Clock, Coffee, Star, Calendar } from 'lucide-react';

const BusinessHours: React.FC = () => {
  const hours = [
    { 
      day: 'Monday',
      hours: '9:00 AM - 6:00 PM',
      peak: '12:00 PM - 4:00 PM',
      special: 'Wedding Consultation Day',
      notes: 'Dedicated time slots for wedding cake tastings and consultations'
    },
    { 
      day: 'Tuesday',
      hours: '9:00 AM - 6:00 PM',
      peak: '11:00 AM - 3:00 PM',
      special: 'Fresh Pastry Tuesday',
      notes: 'Special selection of French pastries available'
    },
    { 
      day: 'Wednesday',
      hours: '9:00 AM - 6:00 PM',
      peak: '12:00 PM - 4:00 PM',
      special: 'Custom Cake Day',
      notes: 'Focus on custom cake orders and decorating'
    },
    { 
      day: 'Thursday',
      hours: '9:00 AM - 6:00 PM',
      peak: '1:00 PM - 5:00 PM',
      special: 'Cupcake Special',
      notes: 'Buy 6 cupcakes, get 2 free'
    },
    { 
      day: 'Friday',
      hours: '9:00 AM - 7:00 PM',
      peak: '2:00 PM - 6:00 PM',
      special: 'Weekend Prep Day',
      notes: 'Extended hours for weekend order pickups'
    },
    { 
      day: 'Saturday',
      hours: '10:00 AM - 5:00 PM',
      peak: '11:00 AM - 4:00 PM',
      special: 'Weekend Special',
      notes: 'Fresh cake slices and coffee combos'
    },
    { 
      day: 'Sunday',
      hours: '10:00 AM - 4:00 PM',
      peak: '11:00 AM - 2:00 PM',
      special: 'Family Sunday',
      notes: '10% off celebration cakes'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Clock size={24} className="text-pink-600 mr-3" />
        <h3 className="text-2xl font-serif font-bold text-gray-800">Weekly Schedule</h3>
      </div>
      
      <div className="space-y-6">
        {hours.map((item, index) => (
          <div 
            key={item.day} 
            className={`bg-white rounded-lg p-4 border border-gray-100 ${
              index < hours.length - 1 ? 'mb-4' : ''
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-serif font-bold text-gray-800">{item.day}</h4>
              <span className="text-pink-600 font-medium">{item.hours}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Coffee size={16} className="mr-2 text-pink-500" />
                <span>Peak Hours: {item.peak}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Star size={16} className="mr-2 text-pink-500" />
                <span>{item.special}</span>
              </div>
              
              <div className="flex items-center text-gray-600 md:col-span-2">
                <Calendar size={16} className="mr-2 text-pink-500" />
                <span>{item.notes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-pink-50 p-4 rounded-md">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Note:</span> Custom cake consultations are available by appointment. Please contact us to schedule a tasting or design consultation.
        </p>
      </div>
    </div>
  );
};

export default BusinessHours;