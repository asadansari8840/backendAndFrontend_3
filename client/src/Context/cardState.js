import CardContext from "./cardContext";
import axios from "axios";
import { useState } from "react";
const CardState = (props) => {
  const [userData, setUserData] = useState([]);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);
  //For getting all users data
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/users");
      setUserData(data.users);
      setLoading(false);
    } catch (alert) {
      setAlert(alert.response.data.message);
    }
  };
  //make a new user
  const createUser = async (userData) => {
    const config = { headers: { "Content-type": "application/json" } };
    try {
      const { data } = await axios.post("/api/v1/create", userData, config);
       setAlert(data.message);
       const newUser = data.user
       userData.concat(newUser)
    } catch (alert) { 
      setAlert(alert.response.data.message);
    }
  };
  //update a user
  const updateUser = async (id, updateData) => {
    try {
      const config = { headers: { "content-type": "application/json" } };
      const { data } = await axios.put(
        `/api/v1/user/${id}`,
        updateData,
        config
      );
      setAlert(data.message)
      const user = data.user;
      let newUser = JSON.parse(JSON.stringify(userData))
      for (let index = 0; index < newUser.length; index++) {
        const element = newUser[index];
        if (element._id === id) {
          newUser[index].name = user.name;
          newUser[index].email = user.email;
          newUser[index].phone = user.phone; 
          newUser[index].website = user.website; 
          break; 
        }
      }  
      setUserData(newUser);
    } catch (alert) {
      setAlert(alert.response.data.message);
    }
  };
  //Delete a user
  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/user/${id}`);
      const filteredData = userData.filter((value) => {
        return value._id !== id;
      });
      setUserData(filteredData);
      setAlert(data.message);
    } catch (alert) {
      setAlert(alert.response.data.message);
    }
  };
  return (
    <CardContext.Provider
      value={{
        getUsers,
        createUser,
        updateUser,
        deleteUser,
        userData,
        alert,
        loading,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
