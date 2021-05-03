import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallBack = ({
  error,
  // componentStack,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div>
      <h1>An error occurred: {error?.message}</h1>
      {/* <pre>{componentStack}</pre> */}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallBack;