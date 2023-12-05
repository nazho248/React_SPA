import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Estetica } from '../Pages/Estetica'
import { Tiempo } from '../Pages/Tiempo'
import { Artefacto } from '../Pages/Artefacto'
import { Galeria } from '../Pages/Galeria'
import { NotFound } from '../Pages/NotFound'
import HomePage from '../Pages/HomePage'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import ArgumentedReality from '../Pages/ArgumentedReality'
import Pruebas from '../AR/Pruebas'

export const RemoveTrailingSlash = ({ ...rest }) => {
    const location = useLocation()

    // If the last character of the url is '/'
    if (location.pathname.match('/.*/$')) {
        return (
            <Navigate
                replace
                {...rest}
                to={{
                    pathname: location.pathname.replace(/\/+$/, ''),
                    search: location.search,
                }}
            />
        )
    } else return null
}

function Routes() {
    const location = useLocation()
    //const tiempoRegex = /^(text|img)$/
    return (
        <AnimatePresence>
            <RemoveTrailingSlash />
            <Routes location={location} key={location.pathname}>

                {/* 404 page */}
                <Route path="*" element={<NotFound />} />
                <Route path="/404" element={<NotFound />} />
                      </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
