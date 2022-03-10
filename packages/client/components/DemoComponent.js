import React, { useEffect } from 'react';

function DemoComponent() {
  useEffect(() => {
    console.log('Hello');
  }, []);
  return <div>Hello</div>;
}

export default DemoComponent;
