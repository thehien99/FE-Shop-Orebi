import * as React from "react"

import { cn } from "@/lib/utils"
import icon from "../../icons/icons";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const { FaSearch } = icon
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "flex  h-10 w-full rounded-md border border-input bg-background p-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />

      <div className="absolute top-3 right-5">
        {props.search && <FaSearch className="text-2xl" />
        }
      </div>

    </div>
  );
})
Input.displayName = "Input"

export { Input }
