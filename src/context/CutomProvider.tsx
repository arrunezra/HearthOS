import React, { createContext, useContext, useState, useEffect } from 'react';

// 📋 Define what data and methods are exposed by this provider
interface UrlContextType {
    role: string;
    updateRole: (newUrl: string) => void;
    clearUrl: () => void;
}

const UrlContext = createContext<UrlContextType>({
    role: "user", //  
    updateRole: () => { },
    clearUrl: () => { },
});

export const CustomProvider = ({ children }: { children: React.ReactNode }) => {
    const [role, setRole] = useState<string>("user");

    // 🚀 Optional: If you need to auto-load or simulate an update after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            // Example: Auto-updating the URL to a baseline config after 3 seconds
            // setUrl("https://api.hearthos.com/v1"); 
            console.log("[UrlContext] Ready for dynamic updates.");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const updateRole = (newUrl: string) => {
        setRole(newUrl);
    };

    const clearUrl = () => {
        setRole("");
    };

    return (
        <UrlContext.Provider value={{ role, updateRole, clearUrl }}>
            {children}
        </UrlContext.Provider>
    );
};

// 🚀 THE HOOK: Export useUrl for quick consumption on any screen
export const useCustomData = () => useContext(UrlContext);