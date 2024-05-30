import Link from "next/link";
import Image from "next/image";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            width={45}
            height={35}
            className="logo_light"
            src={`/img/logo/logo_light.png`}
            alt="brand"
          />
          <Image
            width={45}
            height={35}
            className="logo_dark"
            src={'/img/logo/logo_dark.png'}
            alt="brand"
          />
        </Link>
      </div>
    </>
  );
};

export default HeaderMobile;
