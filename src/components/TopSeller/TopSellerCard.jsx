import React from "react";

const TopSellerCard = ({ name, image, content, post }) => {
  return (
    <div class="profile">
      <img src={image} alt="" class="profile-pic" />
      <h1>{name}</h1>
      <h2>{content}</h2>
      <p>{post} posts</p>
    </div>
  );
};

export default TopSellerCard;
