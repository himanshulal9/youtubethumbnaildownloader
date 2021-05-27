import { Button } from "@material-ui/core";
import React from "react";
import image from "./undraw_page_not_found_su7k.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
export default function NotFound404Error() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
        }}>
        <img
          src={image}
          alt='Error not found page'
          style={{ width: "80%", height: "auto" }}
        />
        <Button
          color='primary'
          size='medium'
          style={{ margin: "20px auto" }}
          component={Link}
          to='/'>
          Back
        </Button>
      </div>
    </>
  );
}
