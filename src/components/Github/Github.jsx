// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/21subham")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-3 text-3xl">
      Github Repos: {data ? data.public_repos : "Loading..."}
      <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  );
}

export default Github;

export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/21subham");
  return response.json();
};
