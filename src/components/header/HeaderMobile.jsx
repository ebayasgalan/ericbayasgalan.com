import Link from "next/link";
import Image from "next/image";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            width={92}
            height={37}
            className="logo_light"
            src={`/img/logo/eb_logo.png`}
            alt="brand"
          />
          <Image
            width={92}
            height={37}
            className="logo_dark"
            src={'/img/logo/eb_logo.png'}
            alt="brand"
          />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
