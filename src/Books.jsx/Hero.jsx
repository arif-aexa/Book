
import BooksCard from './BooksCard'
export default function Hero() {
  return (
   <>

<div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">  
     <BooksCard/>
     <BooksCard/>
     <BooksCard/>
     <BooksCard/>
     <BooksCard/> 
      <BooksCard/> 
       <BooksCard/>
       <BooksCard/>
     </div>


   </>
  )
}
