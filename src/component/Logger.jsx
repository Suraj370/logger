import React, { useEffect } from 'react';

export const withLogging = WrappedComponent => {
  return props => {
    useEffect(() => {
      console.log(`${WrappedComponent.displayName || WrappedComponent.name} is rendered`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
