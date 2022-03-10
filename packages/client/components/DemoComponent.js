import React, { useEffect } from 'react';

function DemoComponent() {
  useEffect(() => {
    console.log('Hello World');
  }, []);
  return <div>DemoComponent</div>;
}

export default DemoComponent;
