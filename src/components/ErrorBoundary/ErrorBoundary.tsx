import { FallbackProps } from 'react-error-boundary'
import './_ErrorBoundary.scss'



function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div className='error-boundary' role="alert">
            <p>Something went wrong:</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default ErrorFallback;