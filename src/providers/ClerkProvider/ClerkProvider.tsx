import type { FC, ReactNode } from 'react';
import { ClerkProvider as Provider } from '@clerk/clerk-react';

type Props = {
  children: ReactNode;
};

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
} else {
  console.log('YESS....');
}

export const ClerkProvider: FC<Props> = ({ children }) => {
  return (
    <Provider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      {children}
    </Provider>
  );
};
