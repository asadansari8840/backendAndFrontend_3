import React, { useContext, useEffect } from "react";
import cardContext from "../Context/cardContext";
import "./Home.scss";
import { Tooltip } from "antd";
import AntCard from "./AntCard";
import { PlusOutlined } from "@ant-design/icons";
import Loader from "./Layout/Loader";
import { Link } from "react-router-dom";
const Home = () => {
  const context = useContext(cardContext);
  const { loading, getUsers, userData } = context;
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading || userData.length === 0 ? (
        <Loader />
      ) : (
        <div className="home">
          {userData &&
            userData.map((val, index) => <AntCard data={val} key={index} />)}
        </div>
      )}
      <Tooltip title="Create User">
        <div className="addCard">
          <Link to="/new">
            <button>
              <PlusOutlined />
            </button>
          </Link>
        </div>
      </Tooltip>
    </>
  );
};

export default Home;
