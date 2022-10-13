import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
    const router = useRouter();
  return (
    <nav id="navbar">
      <div className="mt-4 flex items-center justify-center" style={{marginBottom:'61px'}}>
      <Image
      src="/logo_2.png"
      alt="logo_image"
      width={124}
      height={111}
    />
      </div>
      <div className="w-full">
          <div>
            <Link href="/admin/breed">
              <a
                className={`${
                  router.pathname === '/admin/breed' ? 'b-on' : 'b-off'
                } flex flex-row`}
              >
                {/* <Image width={18} height={18} src="/eel.svg" alt="?" className="logo-off"/> */}
                <img src="/eel.svg" alt="?" className="logo-off" />
               <div>사육일지</div> 
              </a>
            </Link>
          </div>
          <div>
            <Link href="/admin/medicine">
              <a
                className={`${
                  router.pathname === '/admin/medicine'
                    ? 'medi-on'
                    : 'medi-off'
                } flex flex-row`}
              >
                <img src="/medicine.svg" alt="?" className="logo-off" />
                약욕대장
              </a>
            </Link>
          </div>
          <div>
            <Link href="/admin/out">
              <a
                className={`${
                  router.pathname === '/admin/out' ? 'out-on' : 'out-off'
                } flex flex-row`}
              >
                <img src="/box.svg" alt="?" className="logo-off" />
                출하대장
              </a>
            </Link>
          </div>
          <div>
            <Link href="/admin/feed">
              <a
                className={`${
                  router.pathname === '/admin/feed' ? 'feed-on' : 'feed-off'
                } flex flex-row`}
              >
                <img src="/feed.svg" alt="?" className="logo-off" />
                사료대장
              </a>
            </Link>
          </div>
        </div>
      <style jsx>{`
        #navbar {
          font: normal normal bold 16px/18px NanumSquareRound;
          letter-spacing: 0px;
          color: #fafafa;
          height: 100%;
          width: 208px;
        }
        .b-off .logo-off,
        .medi-off .logo-off,
        .out-off .logo-off,
        .feed-off .logo-off {
          width: 18px;
          height: 18px;
          filter: invert(87%) sepia(79%) saturate(5450%) hue-rotate(181deg)
            brightness(119%) contrast(100%);
        }
        .b-on .logo-off,
        .medi-on .logo-off,
        .out-on .logo-off,
        .feed-on .logo-off {
          width: 18px;
          height: 18px;
          filter: invert(16%) sepia(6%) saturate(4077%) hue-rotate(170deg)
            brightness(95%) contrast(86%);
        }
        a {
          display: flex;
          flex-direction: row;
          align-items:center;
          justify-content:center;
          width: 100%;
          height: 48px;
          gap:17px;
        }
        a div{
          display: flex;
          flex-direction: row;
          word-break : nowrap; 
        }
        .b-off,
        .medi-off,
        .out-off,
        .feed-off {
          padding: 15px 50px;
          width: 100%;
          height: 48px;
          background: #253647 0% 0% no-repeat padding-box;
          opacity: 1;
          color: #ffffff;
          border: none;
          z-index: 99;
          padding: 15px 50px;
          width: 100%;
        }

        .b-on,
        .medi-on,
        .out-on,
        .feed-on {
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          color: #253647;
          border: none;
          border-bottom: 4px solid #767f87;
          width: 100%;
          height: 44px;
          padding-right: 16px;
          padding: 15px 50px;
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
