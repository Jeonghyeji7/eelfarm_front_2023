import React from "react";
// import axios from 'axios';
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  //   const handleLogOut = async () => {
  //     const user = await axios.get('/api/auth/logout');

  //     if (user.status === 200) {
  //       router.push('/');
  //     }
  //   };

  return (
    <div id="menu">
      <div className="logout-button-cover flex flex-row items-center justify-end px-11">
        <div className="logout-button flex flex-row justify-center items-center">
          로그아웃
        </div>
      </div>
      <style jsx>{`
        #menu {
          font: normal normal normal 14px/16px NanumSquareRound;
          letter-spacing: 0px;
          color: #ffffff;
          width: 1920px;
          height: 56px;
        }
        .logout-button-cover {
          width: 100vw;
          height: 100%;
        }
        .logout-button {
          width: 56px;
          height: 56px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Menu;
