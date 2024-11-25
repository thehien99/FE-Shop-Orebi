import * as React from "react"
import { cn } from "@/lib/utils"
import icon from "../../icons/icons";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const { FaSearch } = icon
  const [searchValue, setSearchValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = async (e) => {

    e.preventDefault()

    const normalizedSearchTerm = removeAccents(searchValue);
    if (normalizedSearchTerm === searchValue.toLowerCase()) {
      setError('Vui lòng nhập chữ có dấu');
      return;
    }

    if (searchValue.trim()) {
      setSearchParams({ search: searchValue })
      navigate(`/shop?search=${searchValue}`)
      setSearchValue('')
      setError('')
    } else (
      setSearchParams({})
    )
  }
  return (
    <div className="relative">
      <form onSubmit={handleSearch}>

        <input
          type={type}
          className={cn(
            "flex  h-10 w-full rounded-md border border-input bg-background p-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={searchValue}
          {...props}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="absolute top-3 right-5" type="submit">
          {props.search && <FaSearch className="text-2xl" />}
        </button>
        {error &&
          <i className="text-red-500">*{error}</i>
        }
      </form>
    </div>
  );
})
Input.displayName = "Input"

export { Input }
