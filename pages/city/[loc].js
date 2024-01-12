import React from 'react';
import { useRouter } from 'next/router';

const Loc = () => {
  const router = useRouter();
  const locValue = router.query.loc;
  const dataValue = router.query.a;

  console.log(dataValue); // Log the value of 'data' query parameter

  return (
    <div>
      <p>Location: {locValue}</p>
      <p>Data: {dataValue}</p>
    </div>
  );
};

export default Loc;
