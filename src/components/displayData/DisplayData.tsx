import React from 'react';
import useStarwarsApi from '../../api/useStarwarsApi';

interface DisplayDataProps {
  data: any;
  setData: any;
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data, setData }) => {
  const { loading } = useStarwarsApi();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data?.results?.map((data: any, index: any) => {
        return <p key={index}>NAME: {data.name}</p>;
      })}
    </div>
  );
};
