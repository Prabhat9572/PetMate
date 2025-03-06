import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/MiddilePage.css"; // Ensure you have a CSS file for styling

const MiddilePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Small Cards Data (First Section)
  const cards = [
    { title: "Pet Care", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxHCUC9wqrMO2-LZKJRIElnuNk1WK2mvtfQ&s", path: "/pet-care" },
    { title: "Lost & Found", img: "https://t4.ftcdn.net/jpg/00/90/92/25/360_F_90922570_pw5zemqkPsqA0EQ16QQZ3R9wXKGFSXT7.jpg", path: "/lost-found" },
    { title: "Pet Store", img: "https://img.freepik.com/free-vector/pet-shop-with-happy-animals_1308-172634.jpg", path: "/pet-store" },
    { title: "Pet Listing", img: "https://media.istockphoto.com/id/1516239450/photo/love-portrait-and-family-with-dog-at-animal-shelter-for-adoption-at-kennel.jpg?s=612x612&w=0&k=20&c=ZvxsrI5wTlCCRd1nwhDPiSxTIAZOmQdU-UPFZdGSAO8=", path: "/pet-listing" },
    { title: "Pet Food", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrX4Wtigdbxu8RXNjQbSGiVUu1RWtvjrW0ng&s", path: "/pet-food" },
  ];

  // Square Big Cards Data (Shop Our Popular Categories)
  
    const bigCards = [
      { 
        title: "Premium Pet Food", 
        description: "High-quality pet food for your beloved companions.", 
        img: "https://images.pexels.com/photos/7210687/pexels-photo-7210687.jpeg", 
        path: "/premium-pet-food" 
      },
      
      
      { 
        title: "Pet Toys & Play", 
        description: "Fun and engaging toys to keep your pets entertained and active.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBlhRF0RQWBxK9kYMTmB-OFEwl1j6L_uazg&s", 
        path: "/pet-toys" 
      },
      { 
        title: "Adopt a Pet", 
        description: "Find your perfect furry friend and give them a loving home.", 
        img: "https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg", 
        path: "/adopt-a-pet" 
      },
      { 
        title: "Vet & Health Care", 
        description: "Essential healthcare services and vet consultations for your pets.", 
        img: "https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg", 
        path: "/vet-care" 
      },
      
      
      
      { 
        title: "Lost & Found Pets", 
        description: "Help reunite lost pets with their families or find a missing one.", 
        img: "https://images.pexels.com/photos/7210726/pexels-photo-7210726.jpeg", 
        path: "/lost-found" 
      }
    ];
    
  

  return (
    <div className="middle-container">
      {/* Header Text Section */}
      <div className="header-text">
        <h2>Explore Our Services</h2>
        <p>Everything You Need for Your Furry Friend! Find pet care tips, lost & found help, pet stores, and more.</p>
      </div>

      {/* Small Cards Section */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card" onClick={() => navigate(card.path)}>
            <img src={card.img} alt={card.title} className="card-image" />
            <button className="card-button">{card.title}</button>
          </div>
        ))}
      </div>

      {/* Shop Our Popular Categories Section */}
      <div className="popular-categories">
        <h2>Care, Play, and Comfort – All for Your Pet</h2>
        <p>Our popular pet care categories, from premium pet food to pet toys and healthcare services.</p>
        <div className="big-cards-container">
          {bigCards.map((item, index) => (
            <div key={index} className="big-card" onClick={() => navigate(item.path)}>
              <img src={item.img} alt={item.title} className="big-card-image" />
              <div className="big-card-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="big-card-button">Click Here</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
  );
};

export default MiddilePage;
