import DashboardPage from "./pages/Dashboard"
import IntroductionPage from "./pages/Introduction"
import PlantDatabasePage from "./pages/PlantDatabase"
import PlantDatabaseDetailPage from "./pages/PlantDatabaseDetail"
import QuickStartGuidePage from "./pages/QuickStartGuide"
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />
    },
    {
      path: "/introduction",
      element: <IntroductionPage />
    },
    {
      path: "/quickStartGuide",
      element: <QuickStartGuidePage />
    },
    {
      path: "/plantDatabase",
      element: <PlantDatabasePage />
    },
    {
      path: "/plantDatabase/:plantId",
      element: <PlantDatabaseDetailPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
