import React from 'react'
import { useDispatch } from 'react-redux';
import {useParams,Navigate,useNavigate} from 'react-router-dom'

const Book=()=>{
   
    const {id}=useParams()
    const mybooks=useSelector(x=>x.bookSlice.books)
    const navigate=useNavigate()

    return(
        <>
        <>Book{id}</>
        {
            mybooks.map((item)=>{
                if(item.id==id){
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.nameWriter}</div>
                        <Link to={`/books/${item}`}>book {item}</Link>
                    </div>
                )
                }
            })
        
        }
       </>
    )

}

export default Book