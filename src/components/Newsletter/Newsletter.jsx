const Newsletter = () => {
  return (
    <div className="mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="flex relative flex-col mx-auto overflow-hidden rounded">
        <img
          src="https://orgik-theme.myshopify.com/cdn/shop/files/coupon_bg.png?v=1637662560"
          alt=""
          className="w-full dark:bg-gray-500 h-56 lg:h-[630px] object-cover"
        />
        <div className="text-center absolute top-4 md:top-12 lg:top-16 left-1/2 -translate-x-1/2 space-y-6">
          <h1 className="lg:text-5xl">Use this Coupon Code For 15% Off</h1>
          <p className="text-4xl px-10 py-4 border-2 border-dashed border-[#5DA88A] rounded-lg max-w-fit mx-auto">
            Coupon15
          </p>
          <p>Note: For New Users Only</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center p-5 md:p-20 lg:py-20 lg:px-52 lg:m-4 mx-auto lg:-mt-48 space-y-6 sm:px-10 sm:mx-12 lg:rounded-3xl bg-[#F8F0E5]">
          <div className="space-y-2">
            <img
              src="https://orgik-theme.myshopify.com/cdn/shop/files/news_letter.png?v=1637662582"
              alt=""
            />
          </div>
          <hr className="w-full max-w-xs rotate-90 border-2 border-[#5DA88A] hidden lg:flex" />
          <div className="text-center space-y-6">
            <p className="text-2xl">Don&apos;t Miss Out Our Latest Updates</p>
            <h1 className="text-4xl font-semibold font-mercellus">
              Subscribe Us
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-[#E8E9DC] rounded-full mt-3"
            />
            <button className="btn rounded-full text-white bg-[#5DA88A] w-full max-w-xs">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
