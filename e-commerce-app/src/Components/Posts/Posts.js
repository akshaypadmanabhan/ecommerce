
import React, { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../../store/FirebaseContext';
import './Posts.css';

function Posts() {
  const {firebase} =useContext(FirebaseContext)
  const [products,setProducts]=useState([])
  useEffect (()=>{
    firebase.firestore().collection("products").get().then((snapshot)=>{
      const allPost=snapshot.docs.map((product)=>{
        return{

          ...product.data(),
          id:product.id
        }
          
        
      })
      setProducts(allPost);
    })

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Mobiles</span>
         
        </div>
        <div className="cards">
          
          {
            products.map(product=>{
             return <div
            className="card">
            <div className="favorite">
             
            </div>
            <div className="image">
              <img src={product.url} alt="contents" />
            </div>
            <div className="content">
              <p className="rate">{product.price}</p>
              <span className="category">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            
          </div>

            })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Laptops And Computers</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;