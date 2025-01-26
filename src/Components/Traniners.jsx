import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Traniners = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await axios.get("http://localhost:1000/class");
          console.log("all class");
          return res.data;
        },
      });
    return (
        <div className='pt-56'> 
            hello
        </div>
    );
};

export default Traniners;