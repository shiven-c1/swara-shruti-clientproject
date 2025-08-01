// Responsive Navbar logic (no conflicts!)
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.ie-nav-hamburger');
  const nav = document.querySelector('.ie-nav-menu');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });
    document.querySelectorAll('.ie-nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }

  // Services Cards (dynamic render)
  const phoneNumber = "+919096415139";
  const whatsappNumber = "919096415139";

  const services = [
    {
      title: "Harmonium Tuning",
      description: "Perfect tuning using engineering. Professional tuning for all types of harmoniums to ensure perfect pitch.",
      photo: "https://i.ytimg.com/vi/pOuQ-Mg7sg0/sddefault.jpg"
    },
    {
      title: "Reed Replacement",
      description: "Replace damaged or worn reeds to restore sound quality.",
      photo: "https://i.ytimg.com/vi/hbUaX74Zh8k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSy4JMZnpq3R3Ds3v2EZZSPiP2Ig"
    },
    {
      title: "Bellow Replacement",
      description: "Expert replacement of worn or damaged bellows for smooth airflow and improved sound quality. Our precise fitting ensures your harmonium plays effortlessly and maintains its tonal richness.",
      photo: "https://i.ytimg.com/vi/LUoVxnDftPs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gPCgWMA8=&rs=AOn4CLDRxeeffScQHur4mPqAWbY90vDKNA"
    },
    {
      title: "Full Harmonium Overhaul",
      description: "Comprehensive maintenance including internal cleaning, fixing keys and bellows.",
      photo: "https://i.ytimg.com/vi/egcYauv38Uw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1qeNIGpw_ntAUT7Z6xhlFejwkkg"
    },
    {
      title:"Air fitting",
      description:"Professional adjustment and sealing of the bellows and air channels to ensure perfect airflow—eliminating leaks and delivering a strong, clear, and stable sound from your harmonium.",
      photo:"https://i.ytimg.com/vi/hvvdOnOJcdc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGUgWyhPMA8=&rs=AOn4CLCjVhUlmlrI4bca_0Jx5C3LrBXb9Q"
    },
    {
      title:"Piano/Keyboard Repair",
      description:"We fix sticky keys, tuning issues, electrical faults, and more, ensuring smooth playability and rich sound—trusted by musicians and music schools alike. Fast, reliable, and affordable repairs for all brands and models.",
      photo:"https://i.ytimg.com/vi/wUotwU7KjFU/maxresdefault.jpg"
    }
  ];

  const servicesList = document.getElementById('services-list');
  if (servicesList) {
    services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <img src="${service.photo}" alt="${service.title} photo" class="service-photo" />
        <div class="service-title">${service.title}</div>
        <div>${service.description}</div>
        <div class="contact-buttons">
          <a href="tel:${phoneNumber}" class="call-btn shine-btn">Call</a>
          <a href="https://wa.me/${whatsappNumber}" class="whatsapp-btn shine-btn" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      `;
      servicesList.appendChild(card);
    });
  }
});
