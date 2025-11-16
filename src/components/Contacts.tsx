import { useState, useEffect } from 'react';
import { contactsUrl } from '../constant';

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      title: 'Email',
      value: contactsUrl.email,
      href: contactsUrl.email,
      description: 'Send me an email for professional inquiries',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      title: 'Phone',
      value: contactsUrl.phone,
      href: 'tel:+33600000000',
      description: 'Call me for urgent matters',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
      title: 'LinkedIn',
      value: contactsUrl.linkedin,
      href: contactsUrl.linkedin,
      description: 'Connect with me professionally',
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
      title: 'GitHub',
      value: contactsUrl.github,
      href: contactsUrl.github,
      description: 'Check out my code repositories',
    },
  ];

  return (
    <section
      id='contact'
      className='relative min-h-dvh w-screen py-20 overflow-hidden'
    >
      {/* Animated background */}

      {/* Floating geometric shapes */}
      <div className='absolute top-20 left-10 w-32 h-32 border border-green/20 rounded-full animate-spin [animation-duration:20s]'></div>
      <div className='absolute top-1/3 right-20 w-24 h-24 bg-green/5 rotate-45 animate-pulse'></div>
      <div className='absolute bottom-20 left-1/4 w-20 h-20 border-2 border-green/30 animate-bounce [animation-delay:1s]'></div>
      <div className='absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-green/20 to-green/10 rounded-full animate-ping [animation-delay:2s]'></div>

      {/* Particle effects */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className='absolute w-1 h-1 bg-green/30 rounded-full animate-pulse'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        ></div>
      ))}

      <div className='relative z-10 container mx-auto px-8'>
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green to-gray-900 dark:from-white dark:via-green dark:to-white bg-clip-text text-transparent'>
            Let's Connect
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Ready to collaborate on your next project? I'd love to hear from
            you. Let's discuss how we can work together.
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-transparent via-green to-transparent mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Methods */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            }`}
          >
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
              Get In Touch
            </h3>

            <div className='space-y-6'>
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-300 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glowing effect */}
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-green to-green/50 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500'></div>

                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={
                      method.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='relative block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-green/30 hover:scale-105'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`p-3 rounded-full transition-all duration-300 ${
                          hoveredCard === index
                            ? 'bg-green text-white shadow-lg shadow-green/25'
                            : 'bg-green/10 text-green'
                        }`}
                      >
                        {method.icon}
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                          {method.title}
                        </h4>
                        <p className='text-green font-medium mb-1'>
                          {method.value}
                        </p>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>
                          {method.description}
                        </p>
                      </div>
                      <div className='text-green/50 group-hover:text-green transition-colors duration-300'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div
              className={`mt-12 grid grid-cols-2 gap-4 transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <div className='text-center p-4 bg-gradient-to-br from-green/10 to-green/5 rounded-xl border border-green/20'>
                <div className='text-2xl font-bold text-green mb-1'>24h</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Response Time
                </div>
              </div>
              <div className='text-center p-4 bg-gradient-to-br from-green/10 to-green/5 rounded-xl border border-green/20'>
                <div className='text-2xl font-bold text-green mb-1'>100%</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
          >
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white'
                    placeholder='John Doe'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white'
                    placeholder='john@example.com'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white'
                  placeholder='Project Discussion'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none'
                  placeholder='Tell me about your project...'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='group relative w-full px-8 py-4 bg-gradient-to-r from-green to-green/80 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green/30'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Send Message
                  <svg
                    className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                    />
                  </svg>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-green/80 to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className='inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green/10 to-green/5 rounded-full border border-green/20'>
            <div className='w-2 h-2 bg-green rounded-full animate-pulse'></div>
            <span className='text-gray-700 dark:text-gray-300 font-medium'>
              Available for freelance projects and collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
