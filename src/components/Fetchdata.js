import React,{useEffect,useState} from 'react'
import axios from 'axios'
export const Fetchdata = (props) => {
    let apikey=""
    const [Data, setData] = useState('')
    const fetchData = async() => {
    await axios.get(
      props.cat?`https://gnews.io/api/v4/top-headlines?category=${props.cat}&lang=en&country=in&max=10&apikey=fcf59873031a32d785c924f3d71cd5ef`
    :"https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=fcf59873031a32d785c924f3d71cd5ef")
    .then((res)=>setData(res.data.articles));
    };
    useEffect(() => {
      fetchData();
    }, [props.cat]);
  
  return (
    <div style={{backgroundColor:"#d6d6c2"}}>
    <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{height:"50vh"}}>
        <h1 style={{fontSize:'50px',color:"#ff3300"}}>The Daily Planet</h1>
        <h5>{props.h}</h5>
        </div>
  
    <div className="bg-image container my-4" >
      
      <h3  style={{fontSize:'30px',color:"#ff3300"}}><u>TOP HEADLINES</u></h3>
        {/* <h3 className="text-muted" style={{fontSize:'30px',color:"#ff3300"}}>{cat}</h3> */}
        <div  className=" container d-flex my-3 justify-content-center align-items-center flex-column w-75" style={{minHeight:"100vh"}}>
            {Data?Data.map((items,index)=>(
            <>
            <div className="container my-3 p-3 w-75" style={{boxShadow:"2px 2px 10px #ff3300",borderRadius:"10px",backgroundColor:"white"}}>
            <h5 className="my-2">{items.title}</h5>
            <div className="d-flex justify-content-center align-items-center ">
            <img src={items.image} alt="Image not found" className="img-fluid" style={{width:"100%",height:"300px",objectFit:"cover"}}></img>
            </div>
            <p className="my-1">{items.content}</p>
            <a href={items.url} target="_blank">View  More</a>
            </div>
            </>

        )):"loading"}</div>

        </div>
        </div>
      
  )
}
