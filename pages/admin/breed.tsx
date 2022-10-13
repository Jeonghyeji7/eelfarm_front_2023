import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';

//yarn add @apollo/client
//npm install @apollo/react-hooks

const ALL_MEMOS = gql`
  query getMemos {
    allMemos{
      id
      text
    }
  },
  
`
// const POST_MEMO = gql`
// query postMemo(text: String!) {
//     postMemo(text: $text){
//       id
//       text
//     }
//   }
// `

const breed = () => {
  const [text, setText] = useState("");

  const {data,loading,error} = useQuery(ALL_MEMOS);

  const onSubmit=(e:any)=>{
    e.preventdefault()
    // const um = useQuery(POST_MEMO,{
    //   variables:{
    //     text:text
    //   }
    // });
  }



  
 const onchange=(event:any)=>{
  if(event.target.value===""){

  }else{
    setText(event.target.value)
  }
  
 }

 let array=[];
const total=(input:any)=>{
  for(let i=1;i<=input;i++){
    if(i%2===0){
      array.push(i)
    }
   
  }
}

console.log(total(10))

  return (
    <Layout>
      
      <h1>[test crud]</h1>
      {loading && <span>loading...</span>}
      <ul>
      {data?.allMemos?.map((memo:any)=>{
        return(
          <li key={memo.id}>{memo.text}<button>del</button></li>
        )
      })}
      </ul>
      <div>
        <input value={text} onChange={onchange}/>
        <button>resister</button>
      </div>
      
    {/* <div className='cc'>breed</div> */}
<style jsx>{`
  li, h1{
    color:#fff
  }
  button{
    background-color:blue;
    color:#fff
  }
  .cc{
    width: 100%;
          height: 2036px;
    {/* background-color:blue; */}
  }
  `}</style>
    </Layout>
  )
}

export default breed