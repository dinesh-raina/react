import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  language: string | null;
};

const Dashboard = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/dinesh/repos');
        const data = await response.json();
        const users: User[] = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          language: user.language,
        }));
        setUserList(users);
        console.log(userList)
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-[100px] h-[100px] border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mt-[300px]"></div>
        </div>
      ) : (
        <>
          <div className="mt-10 flex items-center justify-center">
            <div className="card w-[700px] p-10 bg-base-100 shadow-stone-400 shadow-lg">
              <div className="card-body ">
                <h2 className="card-title font-bold">Welcome to the Dashboard</h2>
                <p className='text-gray-600 text-[11px] mb-5'>Here you can see the list of users.</p>
                {error ? (
                  <div className="text-red-500">{error}</div>
                ) : userList.length === 0 ? (
                  <div className="text-gray-500">No users found.</div>
                ) : (
                  <div className="max-h-[500px] overflow-y-auto border border-gray-200 rounded-md">
                  <table className='w-full text-left table-auto min-w-max'>
                    <thead className="sticky top-0 bg-white z-10">
                      <tr>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Name</th>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Language</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map(user => (
                        <tr className='bg-gray-50 hover:bg-gray-100' key={user.id}>
                          <td className='border border-gray-200 p-4'>{user.name}</td>
                          <td className='border border-gray-200 p-4'>{user.language ?? '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;