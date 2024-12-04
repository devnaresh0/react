import React, { useId } from 'react'

const Input = React.forwardRef(
    function Input(
        {
            label,
            type = "text",
            claaName = "",
            ...props
        }
        , ref) {
            const id = useId()
        return (
            <div className='w-full'>
                {label && <label className='block mb-1
                ' htmlFor={id}>
                    {lable}
                    </label>
                    }
                    <input
                    type={type}
                    className={`${claaName}`}
                    ref = {ref}
                    {...props}
                    id={id}
                    />

            </div>
        )
    }
)
export default Input