import React from "react";

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "150px",
  width: "100%"
};
function Footer() {
    return (
      <div>
      <footer 
      style ={{
          backgroundColor:"#5B9098",
          color: "white",
          padding: "30px",
          textAlign: "center",
          bottom: "0",
          left: "0",
          width: "100%",
          flexShrink: "0"
        }}
        > 
      &copy; {new Date().getFullYear()} Copyright
      </footer>
      </div>
    );
  }
  
  export default Footer