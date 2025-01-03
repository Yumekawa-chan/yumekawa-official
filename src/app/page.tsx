import MainCard from '@/app/components/MainCard';
import { ReactElement } from 'react';

async function fetchStatus() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseUrl}/api/getStatus`, {
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
