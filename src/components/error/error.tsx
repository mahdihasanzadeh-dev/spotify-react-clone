import type { ReactElement } from 'react';

export function Error():ReactElement {
  return (
    <div className="w-full flex justify-centerr items-center">
      <h1 className="font-bold text-2xl text-white mt-2">Something went wrong. Please try again</h1>
    </div>
  );
}
