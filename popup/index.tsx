import React, { useState } from "react"
import { Box, Paperclip, Cog, Calendar, ClipboardList } from "lucide-react"
import MainButton from "./button"
import "../style.css"


type SectionKey = "assets" | "attachments" | "spareParts" | "schedules" | "workOrders"


type Section = {
    key: SectionKey
    label: string
    icon: React.ElementType
    gradient: string
    actions: { key: string; label: string }[]
}


const SECTIONS: Section[] = [
    {
        key: "assets", label: "Assets", icon: Box, gradient: "from-violet-500 to-fuchsia-500", actions: [
            { key: "overview", label: "Overview" },
            { key: "health", label: "Health" }
        ]
    },
    {
        key: "attachments", label: "Attachments", icon: Paperclip, gradient: "from-cyan-500 to-blue-500", actions: [
            { key: "recent", label: "Recent" },
            { key: "search", label: "Search" }
        ]
    },
    {
        key: "spareParts", label: "Spare Parts", icon: Cog, gradient: "from-emerald-500 to-teal-500", actions: [
            { key: "inventory", label: "Inventory" },
            { key: "alerts", label: "Alerts" }
        ]
    },
    {
        key: "schedules", label: "Schedules", icon: Calendar, gradient: "from-amber-500 to-orange-500", actions: [
            { key: "today", label: "Today" },
            { key: "upcoming", label: "Upcoming" }
        ]
    },
    {
        key: "workOrders", label: "Work Orders", icon: ClipboardList, gradient: "from-pink-500 to-rose-500", actions: [
            { key: "open", label: "Open" },
            { key: "completed", label: "Completed" }
        ]
    }
]


export default function Popup() {
    const [active, setActive] = useState<SectionKey | null>(null)


    return (
        <div className="w-[360px] min-h-[440px] bg-slate-950 text-slate-100 p-3">
            <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 mb-3" />


            <div className="space-y-2">
                {SECTIONS.map((s) => (
                    <div key={s.key} className="rounded-2xl border border-white/10 overflow-hidden">
                        <MainButton
                            label={s.label}
                            icon={s.icon}
                            gradient={s.gradient}
                            active={active === s.key}
                            onClick={() => setActive((prev) => (prev === s.key ? null : s.key))}
                        />


                        {/* secondary buttons: show only when active */}
                        {active === s.key && (
                            <div className="grid grid-cols-2 gap-2 p-3 pt-0">
                                {s.actions.map((a) => (
                                    <button
                                        key={a.key}
                                        className="rounded-xl border border-white/10 px-3 py-2 text-sm hover:border-white/20 hover:bg-white/5"
                                        onClick={() => {/* wire later */ }}
                                    >
                                        {a.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
