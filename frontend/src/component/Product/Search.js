import React, { Fragment ,useState} from 'react'
import "./Search.css";
import MetaData from "../layout/MetaData";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  
  const navigate=useNavigate();
  const [Keyword,setKeyword]=useState("");

  const searchSubmitHandler=(e)=>{
    e.preventDefault();
    if(Keyword.trim()){
      navigate(`/Products/${Keyword}`);
    }else{
      navigate("/Products");
    }
  }

  return (
    <Fragment>
      <MetaData title="Search Any Book...." />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search Book....."
          onChange={(e)=>setKeyword(e.target.value)}
        />
        <input type="submit" value="Search"/>
      </form>
    </Fragment>
  )
}

export default Search;