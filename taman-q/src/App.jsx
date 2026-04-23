import DashboardPage from "./pages/Dashboard"
import IntroductionPage from "./pages/introduction"
import PlantDatabasePage from "./pages/plantDatabase"
import PlantDatabaseDetailPage from "./pages/plantDatabaseDetail"
import QuickStartGuidePage from "./pages/quickStartGuide"
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
