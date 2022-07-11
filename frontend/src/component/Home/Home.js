import React, { Fragment,useEffect} from "react";
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import {clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
      },[dispatch,error,alert]);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>
        <MetaData title="Online Book Shop"/>
        <div className="banner">
            <p>Welcome to Raj Book Shop</p>
            <h1>FIND OUR AMAZING BOOKS BELOW</h1>
      
            <a href="#homeHeading">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>
        <h2 className="homeHeading" id="homeHeading">Some Important Books</h2>
        <div className="container">
        {products &&
              products.map((product) => 
                <ProductCard key={product._id} product={product} />
        )}
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Home;





