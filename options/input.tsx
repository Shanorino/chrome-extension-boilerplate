import React from "react"

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export default function TextInput({
  label,
  className,
  ...props
}: TextInputProps) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-xs text-slate-300">{label}</span>}
      <input
        {...props}
        className={[
          "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none",
          "focus:border-white/20 focus:ring-2 focus:ring-indigo-400",
          className
        ].join(" ")}
      />
    </label>
  )
}
