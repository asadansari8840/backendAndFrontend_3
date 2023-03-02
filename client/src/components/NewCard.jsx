import React, { useState,useContext } from "react";
import cardContext from "../Context/cardContext";
import { Form, Input, Button } from "antd";
import {Link,useNavigate} from "react-router-dom"; 
import toast, { Toaster } from 'react-hot-toast';
import "./NewCard.scss"
const NewCard = () => {
  const context = useContext(cardContext);
  const { createUser,alert} = context ;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    company: "",
  });
 const navigate = useNavigate();
  const { name, email, phone, website, street, suite, city, zipcode, company } =
    user;

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const notify = (message) => toast.success(message,{
    position: "top-center",
  });
  const onSubmitHandler = () =>{
    createUser(user);
    notify(alert || "User created successfully");
    navigate("/");
  }
  return (
    <>
      <div className="new-card">
        <h2>Create User</h2>
        <Form
          onFinish={()=>{
            onSubmitHandler();
          }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          {/* //For name  */}
          <Form.Item
            label="Name"
            name="name"
            initialValue={name}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input onChange={handleOnChange} name="name" type="text" />
          </Form.Item>
          {/* //for email  */}
          <Form.Item
            label="Email"
            name="email"
            initialValue={email}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input onChange={handleOnChange} type="email" name="email" />
          </Form.Item>
          {/* // for phone no  */}
          <Form.Item
            label="Phone"
            name="phone"
            initialValue={phone}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input onChange={handleOnChange} type="tel" name="phone" />
          </Form.Item>
          {/* //for website  */}
          <Form.Item
            label="Website"
            name="website"
            initialValue={website}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input type="text" name="website" onChange={handleOnChange} />
          </Form.Item>
          {/* //for street  */}
          <Form.Item
            label="Street"
            name="street"
            initialValue={street}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input type="text" name="street" onChange={handleOnChange} />
          </Form.Item>
          {/* //for suite  */}
          <Form.Item
            label="Suite"
            name="suite"
            initialValue={suite}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input type="text" name="suite" onChange={handleOnChange} />
          </Form.Item>
          {/* //For city  */}
          <Form.Item
            label="City"
            name="city"
            initialValue={city}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input type="text" name="city" onChange={handleOnChange} />
          </Form.Item>
          {/* //Zipcode  */}
          <Form.Item
            label="Zipcode"
            name="zipcode"
            initialValue={zipcode}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input
              type="number"
              maxLength={10}
              minLength={5}
              name="zipcode"
              onChange={handleOnChange}
            />
          </Form.Item>
          {/* //For Company  */}
          <Form.Item
            label="Company"
            name="company"
            initialValue={company}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input type="text" name="company" onChange={handleOnChange} />
          </Form.Item>
          {/* //Submit button  */}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create 
            </Button>
            <Link to="/">
              Go to Home
            </Link>
          </Form.Item>
        </Form>
        <Toaster/>
      </div>
    </>
  );
};

export default NewCard;
