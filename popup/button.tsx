import React from "react"
import type { ComponentProps } from "react"


export type MainButtonProps = {
    label: string
    active?: boolean
    gradient: string // e.g. "from-violet-500 to-fuchsia-500"
    icon: React.ElementType
} & ComponentProps<"button">


export default function MainButton({ label, active, gradient, icon: Icon, className, ...rest }: MainButtonProps) {
    return (
        <button
            {...rest}
            className={[
                "relative w-full flex items-center justify-between px-3 py-3 rounded-2xl border transition",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-slate-950",
                active ? "bg-white/5 border-white/15" : "hover:bg-white/5 border-white/10",
                className
            ].join(" ")}
            aria-pressed={!!active}
        >
            {/* halo only when active */}
            <span className={[
                "absolute inset-0 -z-10 opacity-0 rounded-2xl transition-opacity",
                active ? `opacity-100 bg-gradient-to-br ${gradient} blur-xl` : ""
            ].join(" ")} />


            <span className="flex items-center gap-2">
                <span className={[
                    "h-9 w-9 grid place-items-center rounded-xl border",
                    active ? "border-white/20 bg-white/10" : "border-white/10"
                ].join(" ")}
                >
                    <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
            </span>


            <svg className={["h-4 w-4 transition-transform", active ? "rotate-180" : ""].join(" ")} viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </button>
    )
}
