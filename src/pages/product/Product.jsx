import { Link } from "@material-ui/core";
import React from "react";
import "./product.css";

import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  const airpod =
    "https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_iPhone-13-pairing_10182021_inline.jpg.slideshow-medium_2x.jpg";

  return (
    <div className="Product">
      <div className="productTitleContainer">
        <div className="productTitle">Product</div>
        <Link to="/new-product">
          <button className="newProductBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            legend="Sales Performance"
          />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={airpod} alt="" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
          </div>

          <div className="productTopBottom">
            <div className="productInfoItem">
              <span className="productInfoKet">id: </span>
              <span className="productInfoValue">1</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKet">sales: </span>
              <span className="productInfoValue">562</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKet">Active: </span>
              <span className="productInfoValue">Yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKet">in stock: </span>
              <span className="productInfoValue">23</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <h3 className="productFormTitle">Product Name</h3>
            <input
              className="productFormInput"
              type="text"
              value="Apple Airpods"
            />
            <div className="productFormSelect">
              <lable className="productFormLabel">In sock</lable>
              <select name="" id="" className="productFormSelect">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="productFormSelect">
              <lable className="productFormLabel">Active</lable>
              <select name="" id="" className="productFormSelect">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className="productFormRight">
            <div className="productFormUpload">
                <img className="productFormImg" src={airpod} alt=""/>

                <label htmlFor="file">    
                    <Publish className="productFormIcon"/>
                </label>
                <input type="file" id="file" style={{display: 'none'}}/> 
            </div> 

            <button className="productFormBTN">Update</button>
          </div>

        </form>
      </div>
    </div>
  );
}
