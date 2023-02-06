import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useBrandApi = create(
    persist(
        (set) => ({
            brandApi: "",
            setBrandApi: (value) => set((state) => ({brandApi: value}))
        }), {
            name: "brandApi",
            createJSONStorage: (() => sessionStorage)
        }
))