'use client'
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    const cptInt = setInterval(() => {
    setCpt(cpt + 1);
    }, 1000);

    return () => {
      clearInterval(cptInt);
    };
  }, [cpt]);

  return (
    <div>
      <h2>compteur en seconde</h2>
      <p>{cpt}</p>
    </div>
  );
};

export default Clock;
