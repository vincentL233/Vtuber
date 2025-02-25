import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <main className="flex-grow w-full">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
};

export default PageContainer;