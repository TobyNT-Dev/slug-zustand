import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useBrands = create(
    persist(
        (set) => ({
            brands: [],
            setBrands: (value) => set((state) => ({brands: value}))
        }), {
            name: "brands",
            createJSONStorage: (() => sessionStorage)
        }
))