import { FC, ReactNode, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { ToastWrapper } from './ToastWrapper/ToastWrapper';
import { StoreProvider } from './StoreProvider/StoreProvider';
import { ClerkProvider } from './ClerkProvider/ClerkProvider';

interface Props {
  children: ReactNode;
}

type FallBackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const Fallback: FC<FallBackProps> = ({ error }) => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div role='alert' className='p-10 space-y-4 text-white'>
      <p>An error has occurred.</p>
      <p>{error.message}</p>
      <button onClick={onGoBack}>戻る</button>
    </div>
  );
};

const contextProviders: React.ElementType[] = [
  ClerkProvider,
  StoreProvider,
  ToastWrapper,
];

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense
      // TODO: Add loader as fallback
      // fallback={
      //   // Loader component
      // }
      >
        {contextProviders.reduceRight(
          (memo, ContextProvider) => (
            <ContextProvider>{memo}</ContextProvider>
          ),
          children
        )}
      </Suspense>
    </ErrorBoundary>
  );
};
