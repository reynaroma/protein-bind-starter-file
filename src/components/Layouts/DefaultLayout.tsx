"use client";  // to indicate that this code will run on the client side or browser

import React, { useState, useLayoutEffect } from 'react';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      {/* sidebar */}
      <div className='relative flex flex-1 flex-col lg:ml-72.5'>
        {/* headers */}
        <main>
          <div className='mx-auto max-w-screen-2xl p-4 dark:bg-[#121212] md:p-6 2xl:p-10'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
