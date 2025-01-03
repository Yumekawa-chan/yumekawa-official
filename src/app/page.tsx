import MainCard from '@/app/components/MainCard';
import { ReactElement } from 'react';

async function fetchStatus() {
  const response = await fetch('http://localhost:3000/api/getStatus', {
    cache: 'no-store',
  });

  if (!response.ok) {
    return {
      location: '不明',
      doing: '不明',
    };
  }

  const data = await response.json();
  return {
    location: data.location || '不明',
    doing: data.doing || '不明',
  };
}

export default async function Home(): Promise<ReactElement> {
  const { location, doing } = await fetchStatus();

  return (
    <div className="min-h-screen flex justify-center p-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <MainCard location={location} doing={doing} />
    </div>
  );
}
