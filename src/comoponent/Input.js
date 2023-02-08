import React from 'react'

const Input = ({onBlur,className,placeholder,label,type,required,onChange,id,value,name}) => {
  return (
      <div className=''>
          <label htmlFor={id}>{label}</label>
          <input type={type} autoComplete="on" name={name} onChange={onChange} id={id} placeholder={placeholder} onBlur={onBlur} className={"border-2 border-indigo-500 rounded-md p-1  px-2 py-2 mx-2 my-2 shadow-sm shadow-black "+ className} required={required} value={value} />
      </div>
  )
}

export default Input