import React from 'react'

export default function land2({data}) {
  return (
    <div>land2</div>
  )
}


export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}` || `http://localhost:5000`);
  
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { data },
    };
  }