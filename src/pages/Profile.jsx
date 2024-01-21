import React, { useEffect, useState } from "react";
import { isAuthentiated, logout } from "../api/userApi";
import { getuserorders } from "../api/orderApi";
import { SlLogout } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = isAuthentiated();
  const [myOrders, setMyOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getuserorders(user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMyOrders(data);
        console.log(data);
      }
    });
  }, []);

  const handleLogout = () => {
    logout().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.msg);
        navigate("/");
      }
    });
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />

      <div className="my-10 pl-10 text-[#284057] max-w-[1350px] mx-auto">
        {/* Account */}
        <div>
          <h2 className="text-[#084240] text-5xl my-5">Account</h2>
          <button
            className="flex items-center gap-2 hover:font-bold hover:underline"
            onClick={handleLogout}
          >
            <SlLogout />
            Log Out
          </button>
        </div>

        <div className="flex justify-between gap-8 my-10">
          {/* Order History */}
          <div>
            <h3 className="text-[#084240] text-3xl my-5">Order History</h3>
            <div className="flex flex-wrap gap-4">
              {myOrders.length > 0 ? (
                myOrders.map((order) => {
                  return (
                    <div
                      key={order._id}
                      className="border-2 border-gray-500 rounded-md w-full max-w-[400px] p-5"
                    >
                      <p>
                        Order Items:{" "}
                        {order.orderItems.map((item) => {
                          return <li key={item._id}>{item.product.title}</li>;
                        })}
                      </p>
                      <p>Total Amount: {order.total}</p>
                      <p>Order Status: {order.status}</p>
                      <p>Deliver to: {order.contact_person}</p>
                    </div>
                  );
                })
              ) : (
                <p>You have not placed any orders yet</p>
              )}
            </div>
          </div>

          {/* Account Details */}
          <div>
            <h3 className="text-[#084240] text-3xl my-5 whitespace-nowrap">
              Account Details
            </h3>
            <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
