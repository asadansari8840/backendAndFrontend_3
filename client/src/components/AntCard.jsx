import React, { useRef, useContext, useState } from "react";
import { Input, Modal,Form } from "antd";
import toast, { Toaster } from 'react-hot-toast';
import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  PhoneOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import cardContext from "../Context/cardContext";
const AntCard = ({ data }) => {
  const context = useContext(cardContext);
  const { deleteUser, alert , updateUser } = context;
  const ref1 = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const likeClickHandler = () => {
    ref1.current.classList.toggle("isLiked");
  };
  const deleteHandler = () => {
    deleteUser(data._id);
    notify(alert || "User deleted successfully")
  };
  //Creating functions for updating a modal
  const [updatedata, setupdateData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
  });
  const { name, email, phone, website } = updatedata;
  const handleOnChange = (e) => {
    setupdateData({ ...updatedata, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = () => {
   updateUser(data._id,updatedata);
   setIsModalOpen(false);
   notify(alert || "User updated successfully.")
  };
  const notify = (message) => toast(message,{
    position: "top-center",
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },

  });
  return (
    <Card
      style={{
        width: 350,
        maxHeight: 410,
      }}
      cover={
        <img
          style={{
            background: "rgba(244, 243, 243, 0.995)",
            height: "200px",
            border: "1px solid rgba(155, 155, 155, 0.283)",
            borderRadius: "0",
          }}
          alt="example"
          src={`https://avatars.dicebear.com/v2/avataaars/${data.name}.svg?options[mood][]=happy`}
        />
      }
      actions={[
        <HeartOutlined
          ref={ref1}
          onClick={likeClickHandler}
          style={{ color: "red", fontSize: "1.2vmax" }}
          key="Like"
        />,
        <EditOutlined
          onClick={showModal}
          style={{ fontSize: "1.2vmax" }}
          key="edit"
        />,
        <DeleteFilled
          onClick={deleteHandler}
          style={{ fontSize: "1.2vmax" }}
          key="ellipsis"
        />,
      ]}
    >
      <div className="ant-card-inner">
        <h3>{data.name}</h3>
        <div className="ant-card-content">
          <div className="ant-lines">
            <MailOutlined /> <p style={{textTransform:"capitalize"}}>{data.email}</p>
          </div>
          <div className="ant-lines">
            <PhoneOutlined /> <p>{data.phone}</p>
          </div>
          <div className="ant-lines">
            <GlobalOutlined /> <p>{data.website}</p>
          </div>
        </div>
      </div>
      {/* //Modal for update the usersdata  */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => {
          onSubmitHandler();
        }}
        onCancel={handleCancel}
      >
        <hr />
        <Form
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
            <Input onChange={handleOnChange} name="name" type="text"/>
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
        </Form>
        <hr />
      </Modal>
      <Toaster/>
    </Card>
  );
};

export default AntCard;
