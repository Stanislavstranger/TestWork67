'use client';

import { useRouter } from 'next/navigation';

export default function CatchAllPage() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>This page is under construction</h1>
      <p>Please check back later.</p>
      <button
        onClick={() => router.back()}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Go Back
      </button>
    </div>
  );
}
