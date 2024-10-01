import { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
  id: number;
  name: string;
}

const MyComponent = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>('http://localhost:8080/api/student');
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
