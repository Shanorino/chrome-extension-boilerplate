import React, { useEffect, useState } from "react"
import TextInput from "./input"
import { storage } from "./utils"
import "../style.css"

export default function OptionsPage() {
    const [org, setOrg] = useState("")


    useEffect(() => {
        storage.get("orgName", "").then(setOrg)
    }, [])


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
            <div className="max-w-md mx-auto space-y-4">
                <h1 className="text-lg font-semibold">Extension Options</h1>
                <p className="text-sm text-slate-300">Basic settings for your workflow.</p>


                <TextInput label="Organization" value={org} onChange={(e) => setOrg(e.currentTarget.value)} placeholder="WAFIOS / Connectavo" />


                <div className="flex justify-end">
                    <button
                        className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-white/20 hover:bg-white/5"
                        onClick={async () => {
                            await storage.set("orgName", org)
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
