import type { FC, ReactNode } from 'react';
import React from 'react';
import { Toaster } from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

export const ToastWrapper: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Toaster position='bottom-right' reverseOrder={true} />
    </React.Fragment>
  );
};
