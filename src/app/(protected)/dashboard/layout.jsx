'use client';

import { useContext, useEffect, useState } from 'react';
import Menubar from '@/components/Menubar';
import { DataContext, DataContextProvider } from '@/context/dataContext';
import { useRouter } from 'next/navigation';
import RangeBar from '@/components/RangeBar';

export default function Dashboard({ children }) {
  const router = useRouter();
  const [menu, setMenu] = useState('find');

  useEffect(() => {
    const route = `/dashboard/${menu}`;
    router.push(route);
  }, [menu]);

  return (
    <DataContextProvider>
      <Menubar menu={menu} setMenu={setMenu} />
      {menu === 'find' && <RangeBar />}
      <main className="flex flex-col items-center">{children}</main>
    </DataContextProvider>
  );
}
