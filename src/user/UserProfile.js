import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

import "./UserProfilePage.css";
const UserProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginReducer = useSelector((state) => state.loginReducer);
  const user = loginReducer.user;
  const token = JSON.parse(localStorage.getItem("jwtToken"));

  useEffect(() => {
    getAllCategories(dispatch, token);
  }, [dispatch]);

  useEffect(() => {
    getAllProducts(dispatch, token);
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) navigate("/");
  }, []);

  return (
    <div className="userProfilePage__container">
      <div className="userProfilePage__sidebar">
        <SidebarUser />
      </div>
      {user && (
        <div className="userProfilePage__content">
          <Image
            className="userProfilePage__content--profilePic"
            width="20%"
            height="20%"
            roundedCircle
            src="images/user.png"
          />

          <Table bordered className="userProfilePage__content--table">
            <tbody>
            
              <tr>
                <td>Username</td>
                <td>{user.username}</td>
              </tr>
            
              <tr>
                <td>Role</td>
                <td>{user.roles[0].role}</td>
              </tr>
              <tr>
                <td>Account Status</td>
                <td>{`${user.enabled}`}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
