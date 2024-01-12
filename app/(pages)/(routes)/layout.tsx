'use client';

import { useEffect, useMemo } from 'react';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import MobileSidebar from './_components/MobileSidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  useEffect(() => {
    const token = cookies.get('connected');
    if (token !== true) {
      router.push('/login');
    }
  }, [cookies, router]);

  return (
    <div className="h-full">
      <div className="md:hidden h-[40px] fixed inset-y-0 w-full z-50">
        <MobileSidebar />
      </div>
      <div className="hidden md:flex h-full w-56 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main>
        <div className="md:pl-[5.5rem] h-full">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
