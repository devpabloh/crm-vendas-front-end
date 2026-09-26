import { BrowserRouter, Routes, Route } from 'react-router'
import { PageLogin } from './pages/page-login'
import { PageAdminDashboard } from './pages/page-admin-dashboard'
import { PageAdminUsers } from './pages/page-admin-users'
import { PageSalesPipeline } from './pages/page-sales-pipeline'
import { PageSalesCustomersId } from './pages/page-sales-customers-id'
import { PageClientPortal } from './pages/page-client-portal'
import { PageClientsProposals } from './pages/page-clients-proposals'
import { LayoutMain } from './pages/layout-main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route index path="/" element={<PageLogin />} />
          <Route path="/admin/dashboard" element={<PageAdminDashboard />} />
          <Route path="/admin/users" element={<PageAdminUsers />} />
          <Route path="/sales/pipeline" element={<PageSalesPipeline />} />
          <Route path="/sales/customers/:id" element={<PageSalesCustomersId />} />
          <Route path="/client/portal" element={<PageClientPortal />} />
          <Route path="/clients/proposals" element={<PageClientsProposals />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
