import Marquee from 'react-fast-marquee';

const Quality = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFE4D9] via-transparent to-[#FDE4D6] ">
      <Marquee speed={100}>
        <div className="flex lg:gap-40 py-36">
          <img
            src="https://orgik-theme.myshopify.com/cdn/shop/files/brand_logo_05_200x200.png?v=1639802304"
            alt=""
          />
          <img
            src="https://orgik-theme.myshopify.com/cdn/shop/files/brand_logo_03_200x200.png?v=1639802322"
            alt=""
          />
          <img
            src="https://orgik-theme.myshopify.com/cdn/shop/files/brand_logo_04_200x200.png?v=1639802351"
            alt=""
          />
          <img
            src="https://orgik-theme.myshopify.com/cdn/shop/files/brand_logo_02_200x200.png?v=1639802368"
            alt=""
          />
          <img
            src="https://orgik-theme.myshopify.com/cdn/shop/files/brand_logo_01_200x200.png?v=1639802383"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Quality;
