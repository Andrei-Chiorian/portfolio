import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import MainLoader from './components/global/loaders/mainLoader/MainLoader'
import { GlobalStyle } from './styles/globalStyles';
import { useTheme } from './contexts/themeContext';

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const currentTheme = useTheme().theme();
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3200);
    }, []);

    
    if (isLoading) {
        return  <MainLoader />;
    }


    return (
        <>
            <Toaster
                position="bottom-right"
                richColors 
                expand={true}
                toastOptions={{
                    className: 'sonner-toast',
                    duration: 1500,
                  }}
              
            />
             <GlobalStyle theme={currentTheme} />
            <RouterProvider router={router} />              
        </>

    )
}

export default App
