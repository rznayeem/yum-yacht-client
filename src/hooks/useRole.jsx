import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const useRole = () => {
  const { user } = useContext(AuthContext);

  const { data: userRole = '', isLoading } = useQuery({
    queryKey: ['userRole', user?.email],
    queryFn: async () => {
      if (!user?.email) return '';
      const res = await axios.get(
        `https://assignment-11-yum-yacht-server.vercel.app/userRole/${user?.email}`,
        { withCredentials: true }
      );
      return res.data?.userRole;
    },
    enabled: !!user?.email,
  });

  return [userRole, isLoading];
};

export default useRole;
