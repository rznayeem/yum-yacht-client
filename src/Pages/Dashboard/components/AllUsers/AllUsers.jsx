import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

const AllUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(
        'https://assignment-11-yum-yacht-server.vercel.app/users'
      );
      console.log(res.data);
      return res.data;
    },
  });

  const handleRole = id => {
    axios
      .patch(`https://assignment-11-yum-yacht-server.vercel.app/users/${id}`)
      .then(res => {
        refetch();
        console.log(res.data);
      });
  };

  const handleDelete = id => {
    axios
      .delete(`https://assignment-11-yum-yacht-server.vercel.app/users/${id}`)
      .then(res => {
        console.log(res.data);
        refetch();
      });
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl text-[#FF923E]">--- Manage all users ---</h1>
      </div>
      <div className="flex justify-between lg:mx-28 p-10">
        <h2 className="text-3xl font-bold">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto lg:mx-28">
        <table className="table w-full overflow-hidden">
          {/* head */}
          <thead className="bg-[#FF923E] rounded-t-2xl">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                {item.role === 'admin' ? (
                  <td>Admin</td>
                ) : (
                  <td>
                    <button
                      onClick={() => handleRole(item._id)}
                      className="btn btn-ghost bg-[#FF923E] text-white"
                    >
                      <MdAdminPanelSettings className="text-2xl text-white"></MdAdminPanelSettings>
                    </button>
                  </td>
                )}
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
