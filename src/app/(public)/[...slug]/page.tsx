'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function CatchAllPage() {
  const router = useRouter();
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (backButtonRef.current) {
      backButtonRef.current.focus();
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px', flex: 1 }}>
      <h1>This page is under construction</h1>
      <p>Please check back later.</p>
      <button
        ref={backButtonRef}
        onClick={() => router.back()}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Go Back
      </button>
    </div>
  );
}
