import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex justify-center'>
      <Link href='/dashboard' className='border-2 p-2'>
        Dashboard
      </Link>
    </main>
  );
}
