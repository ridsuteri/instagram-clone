import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h4>User Kumar</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "108%",
            }}
          >
            <h6>4 Posts</h6>
            <h6>200 Followers</h6>
            <h6>20 Following</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="item"
          src="https://images.unsplash.com/photo-1599058897090-d2c8b88aa1cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default Profile;
