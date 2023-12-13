/* eslint-disable react/jsx-no-useless-fragment */
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import AccessDenied from './_components/AccesDenied';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getServerSession(authOptions);
  const role = 'admin';
  if (role !== 'admin') {
    return <AccessDenied />;
  }
  return <>{children}</>;
};

export default AdminLayout;
