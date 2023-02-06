import { Routes, Route } from 'react-router-dom'
import BrandList from '../../BrandList'
import { ItemDetail } from '../../ItemDetail'

export const AppRouter = () => {
    return (
      <>
        <Routes>
          <Route path="/brandlist/:slug" element={<ItemDetail />} />
          <Route path="/brandlist" element={<BrandList />} />
        </Routes>
      </>
    )
}