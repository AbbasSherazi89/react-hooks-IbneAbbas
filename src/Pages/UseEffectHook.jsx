import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState("posts");
const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div className="container">
        <div>
          <button
            className="btn btn-outline-info"
            onClick={() => setResourceType("posts")}
          >
            Posts
          </button>
          <button
            className="btn btn-outline-info mx-3"
            onClick={() => setResourceType("users")}
          >
            Users
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => setResourceType("comments")}
          >
            Comments
          </button>
        </div>
        <div className="row">
          <h1 className="d-block text-capitalize">{resourceType}</h1>
        </div>
        <div className="row">
            <div>
            {items.map((item,id)=>{
               return <pre key={id}>{JSON.stringify(item)}</pre>
            })}
            </div>
            
        </div>
      </div>
    </>
  );
};

export default UseEffectHook;
