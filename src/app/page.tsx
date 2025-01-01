import { JSX } from 'react';
import MainCard from '@/app/components/MainCard';

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex justify-center p-4">
      <MainCard />
    </div>
  );
}
