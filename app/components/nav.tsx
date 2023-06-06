export default function Nav() {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 text-white'>
              {/* Insert your logo or brand name here */}
              Logo
            </div>
          </div>
          <div className='flex'>
            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-white hover:text-gray-300'
            >
              Home
            </a>
            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-white hover:text-gray-300'
            >
              About
            </a>
            <a
              href='#'
              className='px-3 py-2 text-sm font-medium text-white hover:text-gray-300'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
