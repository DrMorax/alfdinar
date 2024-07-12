"use client";
import { AddToCartButton } from "./add-to-cart";

export default function Details(props: {
  productId: string;
  title: string;
  description: string;
  imageurl: string;
  category: string;
  sub_category: string;
}) {
  return (
    <>
      <div className="img">
        <div className="img-box h-full max-lg:mx-auto">
          <img
            src={props.imageurl}
            alt={props.title}
            className="h-full rounded shadow max-lg:mx-auto lg:ml-auto"
          />
        </div>
      </div>
      <div className="data my-0 flex w-full items-center justify-center pr-0 max-lg:pb-10 lg:my-5 lg:pr-8 xl:my-2 xl:justify-start">
        <div className="data w-full max-w-xl">
          <p className="mb-4 text-lg font-medium leading-8 text-indigo-600">
            {props.category}&nbsp; /&nbsp; {props.sub_category}
          </p>
          <h2 className="font-manrope mb-2 text-3xl font-bold capitalize leading-10 text-gray-900">
            {props.title}
          </h2>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12029_1640)">
                    <path
                      d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12029_1640">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12029_1640)">
                    <path
                      d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12029_1640">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12029_1640)">
                    <path
                      d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12029_1640">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12029_1640)">
                    <path
                      d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12029_1640">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8480_66029)">
                    <path
                      d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                      fill="#F3F4F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8480_66029">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="pl-2 text-sm font-normal leading-7 text-gray-500">
                1624 تقييم
              </span>
              <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl font-light leading-9 text-gray-900 sm:border-r">
                1,000 IQD
              </h6>
            </div>
          </div>
          <p className="mb-5 text-base font-normal text-gray-500">
            {props.description}
          </p>
          <ul className="mb-8 grid gap-y-4">
            <li className="flex items-center gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="13" fill="#4F46E5" />
                <path
                  d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-base font-normal text-gray-900">
                Branded shirt
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="13" fill="#4F46E5" />
                <path
                  d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-base font-normal text-gray-900">
                3 color shirt
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="13" fill="#4F46E5" />
                <path
                  d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-base font-normal text-gray-900">
                Pure Cotton Shirt with 60% as 40%
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="26" rx="13" fill="#4F46E5" />
                <path
                  d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-base font-normal text-gray-900">
                جميع الاحجام متوفرة
              </span>
            </li>
          </ul>
          {/* <p className="mb-4 text-lg font-medium leading-8 text-gray-900">
                الحجم
              </p>
              <div className="w-full flex-wrap border-b border-gray-100 pb-8">
              <div className="grid max-w-md grid-cols-3 gap-3 min-[400px]:grid-cols-5">
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg font-semibold leading-8 text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                  S
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg font-semibold leading-8 text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                  M
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg font-semibold leading-8 text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                  L
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg font-semibold leading-8 text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    XL
                    </button>
                    <button className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-1.5 text-center text-lg font-semibold leading-8 text-gray-900 transition-all duration-300 visited:border-gray-300 visited:bg-gray-50 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100">
                    XXL
                    </button>
                    </div>
                    </div> */}

          <div dir="ltr" className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-2">
            <div className="flex w-full sm:items-center sm:justify-center">
              <button className="group rounded-l-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                <svg
                  className="stroke-gray-900 group-hover:stroke-black"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="w-full cursor-pointer border-y border-gray-400 bg-transparent px-6 py-[13px] text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 hover:bg-gray-50 sm:max-w-[118px]"
                placeholder="1"
              />
              <button className="group rounded-r-full border border-gray-400 bg-white px-6 py-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                <svg
                  className="stroke-gray-900 group-hover:stroke-black"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke="#9CA3AF"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <AddToCartButton id={props.productId} />
          </div>
          {/* <div className="flex items-center gap-3">
                <button className="group rounded-full bg-indigo-50 p-4 transition-all duration-500 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                >
                <path
                      d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                      stroke="#4F46E5"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      />
                      </svg>
                </button>
              </div> */}
        </div>
      </div>
    </>
  );
}
