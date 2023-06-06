/* eslint-disable react/jsx-key */
import style from './skeleton.module.css';
export default function Loading() {
  return (
    <>
      <div className=''>
        {[...new Array(10)].map(() => (
          <div className='bg-gray-200 p-4'>
            <div
              className={`${style.skeleton} bg-white rounded-lg shadow-md p-6`}
            >
              <h2 className='text-xl font-bold mb-4 w-full'>
                {} {}
              </h2>
              <div className='mb-2'>
                <span className='font-semibold'>Email: </span>
                <a>{}</a>
              </div>
              <div>
                <span className='font-semibold'>Phone: </span>
                <a>{}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
