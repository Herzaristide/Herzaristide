import { useState, useEffect } from 'react';
import CV from '../assets/CV_APICH_FR.pdf';

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('resume');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Aristide_Pichereau_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePrint = () => {
    window.open(CV, '_blank');
  };

  return (
    <section
      id='resume'
      className='relative min-h-dvh w-screen py-20 overflow-hidden'
    >
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'></div>

      {/* Floating background elements */}
      <div className='absolute top-20 left-10 w-32 h-32 bg-green/5 rounded-full blur-xl animate-pulse [animation-duration:4s]'></div>
      <div className='absolute top-1/2 right-20 w-24 h-24 bg-green/10 rounded-full blur-lg animate-float'></div>
      <div className='absolute bottom-20 left-1/3 w-20 h-20 bg-green/5 rounded-full blur-lg animate-bounce [animation-duration:3s]'></div>

      <div className='relative z-10 container mx-auto px-8 h-full'>
        {/* Header Section */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green to-gray-900 dark:from-white dark:via-green dark:to-white bg-clip-text text-transparent'>
            My Resume
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8'>
            Download or view my complete professional experience, skills, and
            achievements
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-transparent via-green to-transparent mx-auto rounded-full'></div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={handleDownload}
            className='group relative px-6 py-3 bg-gradient-to-r from-green to-green/80 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green/30'
          >
            <span className='relative z-10 flex items-center gap-2'>
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
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              Download PDF
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-green/80 to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
          </button>

          <button
            onClick={handlePrint}
            className='group px-6 py-3 border-2 border-green text-green hover:bg-green hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105'
          >
            <span className='flex items-center gap-2'>
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
                  d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
                />
              </svg>
              Print / View
            </span>
          </button>

          <button
            onClick={handleFullscreen}
            className='group px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green hover:text-green font-semibold rounded-full transition-all duration-300 hover:scale-105'
          >
            <span className='flex items-center gap-2'>
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
                  d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                />
              </svg>
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </span>
          </button>
        </div>

        {/* Resume Container */}
        <div
          className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {' '}
          <div
            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-500 ${
              isFullscreen
                ? 'fixed inset-4 z-50 rounded-xl'
                : 'mx-auto max-w-4xl h-[500px]'
            }`}
          >
            {/* Loading overlay */}
            {!isLoaded && (
              <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10'>
                <div className='text-center'>
                  <div className='w-16 h-16 border-4 border-green/30 border-t-green rounded-full animate-spin mx-auto mb-4'></div>
                  <p className='text-gray-600 dark:text-gray-400 font-medium'>
                    Loading Resume...
                  </p>
                </div>
              </div>
            )}
            {/* Fullscreen close button */}
            {isFullscreen && (
              <button
                title='fullscreen'
                onClick={handleFullscreen}
                className='absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}{' '}
            {/* Resume embed */}
            <embed
              src={`${CV}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
              className='w-full h-full rounded-2xl'
              type='application/pdf'
              onLoad={() => setIsLoaded(true)}
            />
            {/* Fallback for browsers that don't support embed */}
            <div className='absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800 opacity-0 pointer-events-none'>
              <div className='text-center p-8'>
                <svg
                  className='w-16 h-16 text-gray-400 mx-auto mb-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  PDF Viewer Not Available
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Your browser doesn't support PDF embedding
                </p>
                <button
                  onClick={handleDownload}
                  className='px-6 py-3 bg-green text-white font-semibold rounded-full hover:bg-green/80 transition-colors duration-300'
                >
                  Download Resume Instead
                </button>
              </div>
            </div>
          </div>
          {/* Resume stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto'>
            <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-3xl font-bold text-green mb-2'>3+</div>
              <div className='text-gray-600 dark:text-gray-300'>
                Years Experience
              </div>
            </div>
            <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-3xl font-bold text-green mb-2'>15+</div>
              <div className='text-gray-600 dark:text-gray-300'>
                Projects Completed
              </div>
            </div>
            <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-3xl font-bold text-green mb-2'>10+</div>
              <div className='text-gray-600 dark:text-gray-300'>
                Technologies Mastered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
