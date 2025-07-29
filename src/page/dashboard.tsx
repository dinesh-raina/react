import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
};

const Dashboard = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loding, setLoding] = useState<boolean>(false);
  return <h1>Dashboard Page</h1>;
};

export default Dashboard;