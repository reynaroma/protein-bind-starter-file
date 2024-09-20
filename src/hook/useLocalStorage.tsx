'use client';
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

const useLocalStorage = () => {
  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage