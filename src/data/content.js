// content.js
// Centralized data for the TravelWebsite components

export const features = [
  {
    id: 1,
    icon: "icon/feature-1.svg",
    title: "Map Location",
    description: "Lorem Ipsum is simply dummy text of the printing."
  },
  {
    id: 2,
    icon: "icon/feature-2.svg",
    title: "Traveling Bag",
    description: "Lorem Ipsum is simply dummy text of the printing."
  },
  {
    id: 3,
    icon: "icon/feature-3.svg",
    title: "Photography",
    description: "Lorem Ipsum is simply dummy text of the printing."
  },
  {
    id: 4,
    icon: "icon/feature-4.svg",
    title: "Affordable Prices",
    description: "Lorem Ipsum is simply dummy text of the printing."
  }
];

export const destinations = [
  { value: 'turkey', label: 'Turkey' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'indonesia', label: 'Indonesia' }
];

export const aboutInfo = {
  title: 'With Us, You Are Always In For A Pleasant Surprise',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ],
  stats: {
    customers: '25K+',
    experience: '15+'
  }
};

export const specialOffers = [
  {
    id: 1,
    image: 'index/special-img2.webp',
    headline: 'Discount up 50%',
    description: 'Special Offer for Couples'
  },
  {
    id: 2,
    image: 'index/special-img1.webp',
    headline: 'Discount up 50%',
    description: 'Special Offer on Adventure tours'
  }
];

export const tours = [
  { id:1, image: 'index/tour-img1.webp', title: 'Explore beauty of Turkey', link: '#' },
  { id:2, image: 'index/tour-img2.webp', title: 'Explore beauty of Sweden', link: '#' },
  { id:3, image: 'index/tour-img3.webp', title: 'Explore beauty of Indonesia', link: '#' },
  { id:4, image: 'index/tour-img4.webp', title: 'Explore beauty of Pakistan', link: '#' },
  { id:5, image: 'index/tour-img5.webp', title: 'Explore beauty of Dubai', link: '#' },
  { id:6, image: 'index/tour-img6.webp', title: 'Explore beauty of Paris', link: '#' }
];

export const chooseUs = [
  { id:1, icon: 'icon/choose-1.svg', title: 'Tour and Travel', desc: '' },
  { id:2, icon: 'icon/choose-2.svg', title: 'Campus', desc: '' },
  { id:3, icon: 'icon/choose-3.svg', title: 'Adventure Tour', desc: '' },
  { id:4, icon: 'icon/choose-4.svg', title: 'Photography', desc: '' }
];

export const services = [
  { id:1, icon: 'icon/services-1.svg', title: 'Custom Destinations' },
  { id:2, icon: 'icon/services-3.svg', title: 'Unforgettable Moments' },
  { id:3, icon: 'icon/services-2.svg', title: 'Competitive Pricings' }
];

export const teamMembers = [
  { id:1, image:'index/team-img1.webp', name: 'James Bowel', role: 'Tour Guide' },
  { id:2, image:'index/team-img2.webp', name: 'Lucy Amanda', role: 'Tour Guide' },
  { id:3, image:'index/team-img3.webp', name: 'Victoria Bells', role: 'Tour Guide' }
];

export const faqs = [
  { id:1, question: 'How many people will be on my trip?', answer: 'Lorem ipsum...' },
  { id:2, question: 'Do you offer discount on family bookings?', answer: 'Lorem ipsum...' },
  { id:3, question: 'What are your Most Booked Destinations?', answer: 'Lorem ipsum...' },
  { id:4, question: 'What is your refund policy?', answer: 'Lorem ipsum...' }
];

export const testimonials = [
  { id:1, image:'index/testimonials-1.webp', name: 'Raisa Barker', role: 'Tourist', rating: 5, text: 'Lorem ipsum...' },
  { id:2, image:'index/testimonials-2.webp', name: 'Terrence Baker', role: 'Tourist', rating: 5, text: 'Lorem ipsum...' },
  { id:3, image:'index/testimonials-3.webp', name: 'Xiong Lee', role: 'Tourist', rating: 5, text: 'Lorem ipsum...' }
];

export const logos = [
  'index/logoipsum-1.svg', 'index/logoipsum-3.svg', 'index/logoipsum-4.svg',
  'index/logoipsum-5.svg', 'index/logoipsum-4.svg', 'index/logoipsum-3.svg'
];

export const blogs = [
  { id:1, category: 'Traveller', image:'index/blog-1.webp', title: 'Lorem ipsum dolor sit amet consectetur adipisicing.', excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...' },
  { id:2, category: 'Vacation', image:'index/blog-2.webp', title: 'Lorem ipsum dolor sit amet consectetur adipisicing.', excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...' },
  { id:3, category: 'Boating', image:'index/blog-3.webp', title: 'Lorem ipsum dolor sit amet consectetur adipisicing.', excerpt: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...' }
];

export const newsletter = {
  heading: 'Stay In The Know, Without Having To Do Anything',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  placeholder: 'Enter Your Email Address'
};
