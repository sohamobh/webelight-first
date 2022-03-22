import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
})

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
reportWebVitals()
