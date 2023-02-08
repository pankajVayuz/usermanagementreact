import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = () => {
    const id = localStorage.getItem("id");
  return (
      <>
      <div className="flex justify-center">
  <div>
    <div className="dropstart relative">
      <button
        className="
          dropdown-toggle
          px-6
          py-2.5
          bg-red-500
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1s"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-left"
          className="w-1.5 mr-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
        >
          <path
            fill="currentColor"
            d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
          ></path>
        </svg>
        Action
      </button>
      <ul
        className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1s"
      >
        <li>
          <Link
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            to={`/user/edit/${id}`}
            >Edit</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</div>
      
      </>
  )
}

export default DropDown