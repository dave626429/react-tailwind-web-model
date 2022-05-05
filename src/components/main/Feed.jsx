import React from "react";

export default function Feed() {
  return <Container />;
}

function Container() {
  return (
    <div className="flex flex-col flex-1 items-center overflow-y-scroll">
      {/* controlling the overflow needs height[some]-h-1 */}
      <div className="block h-1">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
}

function FeedCard() {
  return (
    <div className="flex p-4">
      <div className="flex max-w-[660px] p-6 bg-primary rounded-[20px]">
        <Avatar />
        <FeedContent />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className=" min-w-[60px] max-h-[60px] bg-gray-600 rounded-full mr-6"></div>
  );
}
function FeedContent() {
  return (
    <div className="flex flex-col">
      <UserName />
      <UserPost />
    </div>
  );
}
function UserName() {
  return (
    <div className="flex flex-1 leading-[60px]">
      <p>Vikas</p>
    </div>
  );
}
function UserPost() {
  return (
    <p>
      I love Murakami, but the endings are infuriating.I love Murakami, but the
      endings are infuriating.I love Murakami, but the endings are infuriating.I
      love Murakami, but the endings are infuriating.I love Murakami, but the
      endings are infuriating.vI love Murakami, but the endings are infuriating.
    </p>
  );
}
