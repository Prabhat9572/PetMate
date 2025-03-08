import React from "react";
import "../Style/Services.css"; // Ensure lowercase 'style'

const services = [
  { title: "Pet Adoption", description: "Find your perfect furry friend and give them a loving home.", icon: "🐶" },
  { title: "Pet Grooming", description: "Professional grooming to keep your pet clean and happy.", icon: "🛁" },
  { title: "Veterinary Services", description: "Top-notch medical care for your pet’s health and well-being.", icon: "🏥" },
  { title: "Pet Training", description: "Expert training to improve your pet’s behavior and skills.", icon: "🎾" },
  { title: "Pet Boarding & Daycare", description: "Safe and comfortable boarding for when you’re away.", icon: "🏠" },
  { title: "Lost & Found Pet Assistance", description: "Help reunite lost pets with their owners.", icon: "🔍" },
  { title: "AI-Based Pet Matching", description: "Smart matching to help you find the best pet for you.", icon: "🤖" },
  { title: "Pet Nutrition & Diet Plans", description: "Customized meal plans to keep your pet healthy and happy.", icon: "🥗" }
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      
      <p className="services-description">
        We offer a wide range of services to ensure your pet receives the best care possible. 
        From adoption to professional grooming, veterinary support,  
        our goal is to create a loving and caring environment for your furry friends.
      </p>

      {/* Image with animated overlay text */}
      <div className="services-image-container">
        <img 
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
          alt="Cute dog representing our services" 
          className="services-image" 
        />
       
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <button key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Services;
