import React from "react";
import SideBar from "../SideBar/SideBar";
import NewHome from "../NewHome/NewHome";
import InterCard from "../InterCard/InterCard";
import Enginnering from "../Enginnering/Enginnering";
import { useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation("");
  const { id, field } = location.state || {};
  return (
    <>
      <SideBar field={fe} setfield={setfield} />
      {field === "Home" ? (
        <NewHome field={field} setfield={setfield} />
      ) : field === "Intermediate" ? (
        <InterCard field={field} />
      ) : (
        <Enginnering />
      )}
    </>
  );
};

export default ProtectedRoute;
