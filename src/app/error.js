'use client'

import { useEffect } from "react";

const ErrorPage = ({error,reset}) => {
    useEffect(() => {
        
        console.error(error)
      }, [error])
    console.log(error.message)
    return (
        <div className='text-center text-red-700'>
            <h1>Error !!!</h1>
            <h1>{error.message}</h1>
        </div>
    );
};

export default ErrorPage;