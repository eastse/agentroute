import "./global.css";

import AppProvider from "@/app/Provider";
import AppRouter from "@/app/Router";

export default function App() {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
}
