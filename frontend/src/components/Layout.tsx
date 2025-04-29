import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return <>
        <div className='min-h-screen flex justify-center'>
            <div className='flex w-full max-w-[1200px]'>
                <div className='w-full max-w-[275px]'>
                    <Header/>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    </>
};

export default Layout;