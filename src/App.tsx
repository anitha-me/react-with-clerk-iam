import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Home from './pages/Home';
import Login from './pages/Login';
import { AppProvider } from './providers';

export default function App() {
  return (
    <AppProvider>
      <SignedOut>
        <Login />
      </SignedOut>

      <SignedIn>
        <Home />
      </SignedIn>
    </AppProvider>
  );
}
