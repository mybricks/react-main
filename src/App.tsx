import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import { staticApps, dynamicApps } from './microApps'
import Home from './pages/home'
import DynamicContainer from './pages/dynamicContainer'
import StaticContainer from './pages/staticContainer'
import NotFound from './pages/notFound'
import { useLayoutEffect } from "react";
import { prefetchApps } from 'qiankun'


function App() {
  useLayoutEffect(() => {
    prefetchApps([...staticApps, ...dynamicApps])
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout>
          <Routes>
            <Route path="/" element={<Home />} key={'home'} />
            {staticApps.map((app) => <Route path={app.activeRule} element={<StaticContainer />} key={app.name} />)}
            {dynamicApps.map((app) => <Route path={app.activeRule} element={<DynamicContainer />} key={app.name} />)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
