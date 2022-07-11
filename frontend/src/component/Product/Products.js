import React, { Fragment,useEffect,useState} from 'react'
import "./Products.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction.js";
import Loader from "../layout/Loader/Loader.js";
import ProductCard from "../Home/ProductCard.js";
import Pagination from "react-js-pagination";
import {useParams} from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography"
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";

const categories=[
    "Class: I-XII NCERT",
    "Class: I-XII Other",
    "IIT JEE Mains",
    "IIT JEE Advance",
    "UG NEET",
    "Others"
];


const Products = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {keyword}=useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
  
    const {
      products,
      loading,
      error,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    } = useSelector((state) => state.products);
  
    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    };
  
    let count = filteredProductsCount;
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getProduct(keyword,currentPage,category, ratings));
    }, [dispatch, keyword, currentPage, category, ratings, alert, error]);


  return (
    <Fragment>
        { loading ? <Loader/>:
            <Fragment>
                <MetaData title="All Book" />
          <h2 className="productsHeading">All Books</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>All Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
            </Fragment>
        }
    </Fragment>
  );
}

export default Products;