import React from 'react'

export default function land1({data}) {
    console.log("data",data)
  return (
    <div>land1</div>
  )
}

export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
  
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