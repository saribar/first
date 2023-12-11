
import { useSelector } from 'react-redux'
import {Outlet,Link} from 'react-router-dom'

const Books =()=>{



     const mybooks=useSelector(x=>x.bookSlice.books)
     return(
        <>
        {
            mybooks.map((item)=>{
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.nameWriter}</div>
                        <div>{item.price}</div>
                        <Link to={`/books/${item}`}>book {item}</Link>
                    </div>
                )
            })
        }

        <Outlet/>
        </>
     )

}

export default Books