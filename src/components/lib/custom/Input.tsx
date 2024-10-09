import React, { InputHTMLAttributes, useState } from "react";
import { Icon } from '@iconify/react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  icon?: string
}

const Input: React.FC<Props> = ({
  type,
  error,
  icon,
  label,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  ...rest
}) => {
  const [passwordType, setPasswordType] = useState("password")

  const togglePassword = () => {
    if (passwordType === 'password') {
      return setPasswordType('text')
    }

    setPasswordType('password')
  }

  return (
    <>
      {label &&
        <label className="text-sm text-[#101928]">
          {label}
        </label>
      }

      {type === 'password' ? (
        <div className="relative w-full mt-[0.2rem]">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2">
              <Icon
                width="20"
                height="20"
                icon={icon}
                color="#B0BABF"
              />
            </div>
          )}

          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <input
              type="checkbox"
              className="hidden js-password-toggle"
            />

            <button
              type="button"
              disabled={disabled}
              onClick={togglePassword}
              className="text-xs px-2 text-[#464646] cursor-pointer js-password-label"
            >
              {passwordType === "password" ?
                <Icon
                  width="20"
                  height="20"
                  color="#B0BABF"
                  icon="ion:eye"
                /> :

                <Icon
                  width="20"
                  height="20"
                  color="#B0BABF"
                  icon="ion:eye-off"
                />
              }
            </button>
          </div>

          <input
            {...rest}
            value={value}
            onChange={onChange}
            type={passwordType}
            disabled={disabled}
            placeholder={placeholder}
            className={`${className}`}
          />
        </div>
      ) : (
        <div className="mt-[0.2rem] relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2">
              <Icon
                icon={icon}
                width="20"
                height="20"
                color="#B0BABF"
              />
            </div>
          )}

          <input
            {...rest}
            type={type}
            value={value}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className}`}
          />
        </div>
      )}

      <div className="mt-[0.2rem]">
        {error &&
          <label className="text-red-500 text-sm">
            {error}
          </label>
        }
      </div>
    </>
  )
}

export default Input