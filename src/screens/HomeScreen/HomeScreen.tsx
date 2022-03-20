import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './_HomeScreen.scss'
import { Feed, RightAside } from '../../components'
import ErrorFallback from '../../components/ErrorBoundary/ErrorBoundary'
const HomeScreen: React.FC = () => {
    return (
        <>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => { window.location.reload() }}>
                <Feed />
            </ErrorBoundary>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => { window.location.reload() }}>
                <RightAside />
            </ErrorBoundary>
        </>
    )
}

export default HomeScreen
