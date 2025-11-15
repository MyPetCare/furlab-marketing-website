import React, { useState, useCallback, useRef, useEffect } from 'react';
import type { AppContent } from '../types';
import { content as initialContent } from '../constants/content';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import PasswordProtection from '../components/PasswordProtection';
import { NutritionIcon, HabitIcon, HealthIcon } from '../components/Icons';

const CONTENT_STORAGE_KEY = 'furlabContent';

// Icon mapping for serialization/deserialization
const iconMap: { [key: string]: any } = {
    'NutritionIcon': NutritionIcon,
    'HabitIcon': HabitIcon,
    'HealthIcon': HealthIcon
};

// Serialize content for storage (convert icon components to strings)
const serializeContent = (content: AppContent): any => {
    const getIconName = (icon: any): string => {
        if (typeof icon === 'string') return icon;
        if (icon === NutritionIcon) return 'NutritionIcon';
        if (icon === HabitIcon) return 'HabitIcon';
        if (icon === HealthIcon) return 'HealthIcon';
        if (typeof icon === 'function' && icon.name) return icon.name;
        return 'NutritionIcon';
    };
    
    return {
        ...content,
        home: {
            ...content.home,
            features: content.home.features.map((f: any) => ({
                title: f.title,
                benefit: f.benefit,
                icon: getIconName(f.icon)
            }))
        }
    };
};

// Deserialize content from storage (convert icon strings to components)
const deserializeContent = (data: any): AppContent => {
    return {
        ...data,
        home: {
            ...data.home,
            features: data.home.features.map((f: any) => ({
                ...f,
                icon: iconMap[f.icon] || NutritionIcon
            }))
        }
    };
};

const TopBar: React.FC<{ isDirty: boolean; onSave: () => void; onReset: () => void; onImport: (e: React.ChangeEvent<HTMLInputElement>) => void; onExport: () => void; importRef: React.RefObject<HTMLInputElement> }> = ({ isDirty, onSave, onReset, onImport, onExport, importRef }) => (
    <>
        <div className="bg-neutral-dark text-white p-3 flex justify-between items-center shadow-md z-10">
            <h1 className="text-2xl font-poppins font-bold">Furlab Content Editor</h1>
            <div className="flex items-center gap-4">
                <button onClick={() => importRef.current?.click()} className="font-semibold hover:text-gold transition-colors">Import</button>
                <input type="file" accept=".json" ref={importRef} onChange={onImport} className="hidden" />
                <button onClick={onExport} className="font-semibold hover:text-gold transition-colors">Export</button>
                <button onClick={onReset} className="font-semibold hover:text-accent-coral transition-colors">Reset</button>
                <button 
                    onClick={onSave} 
                    className={`font-bold font-poppins px-5 py-2 rounded-full transition-colors ${
                        isDirty 
                        ? 'bg-gold text-neutral-dark animate-pulse'
                        : 'bg-gold text-neutral-dark'
                    } hover:bg-yellow-400`}
                >
                    Save Changes
                </button>
            </div>
        </div>
        {isDirty && (
            <div className="bg-gold text-neutral-dark text-center py-2 text-sm font-semibold">
                You have unsaved changes.
            </div>
        )}
    </>
);

const Sidebar: React.FC<{ activeTab: string; onTabClick: (tab: string) => void; tabs: string[] }> = ({ activeTab, onTabClick, tabs }) => (
    <div className="bg-neutral-card p-4 border-r border-neutral-divider">
        <nav className="flex flex-col gap-2">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => onTabClick(tab)}
                    className={`w-full text-left px-4 py-2 rounded-md font-poppins font-semibold transition-colors ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-neutral-divider'}`}
                >
                    {tab}
                </button>
            ))}
        </nav>
    </div>
);

const Notification: React.FC<{ message: string; onDismiss: () => void }> = ({ message, onDismiss }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(onDismiss, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, onDismiss]);

    if (!message) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-neutral-dark text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-bounce">
            {message}
        </div>
    );
};

const ContentEditorPage: React.FC = () => {
    const [content, setContent] = useState<AppContent>(() => {
        try {
            const savedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
            if (savedContent) {
                const parsed = JSON.parse(savedContent);
                return deserializeContent(parsed);
            }
            return initialContent;
        } catch (error) {
            console.error("Failed to parse content from localStorage", error);
            return initialContent;
        }
    });

    const [activeTab, setActiveTab] = useState('Home');
    const [notification, setNotification] = useState('');
    const [isDirty, setIsDirty] = useState(false);
    const importFileRef = useRef<HTMLInputElement>(null);
    const tabs = ['Home', 'Features', 'Blog', 'Contact'];

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = ''; // Required for Chrome
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isDirty]);

    const showNotification = (message: string) => {
        setNotification(message);
    };

    const handleContentChange = useCallback((path: (string | number)[], value: any) => {
        setIsDirty(true);
        setContent(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                if (current[path[i]] === undefined) return prev; // Path validation
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newState;
        });
    }, []);

    const handleSave = () => {
        const serialized = serializeContent(content);
        localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(serialized));
        setIsDirty(false);
        showNotification('Content saved successfully!');
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all content to the default state? This cannot be undone.')) {
            setContent(initialContent);
            localStorage.removeItem(CONTENT_STORAGE_KEY);
            setIsDirty(false);
            showNotification('Content has been reset.');
        }
    };

    const handleExport = () => {
        // 1. Export JSON (serialize first to convert icons to strings)
        const serialized = serializeContent(content);
        const jsonContentStr = JSON.stringify(serialized, null, 2);
        const jsonDataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonContentStr);
        const jsonLinkElement = document.createElement('a');
        jsonLinkElement.setAttribute('href', jsonDataUri);
        jsonLinkElement.setAttribute('download', 'furlab-content.json');
        jsonLinkElement.click();
    
        // 2. Generate and Export TypeScript content - JSON + deserialize approach
        const generateTsContent = (data: AppContent): string => {
            const serialized = serializeContent(data);
            const jsonString = JSON.stringify(serialized, null, 2);
            
            return `import type { AppContent } from '../types';
import { NutritionIcon, HabitIcon, HealthIcon } from '../components/Icons';
import FurlabLogo from './furlab_homepage_icon_240x80.svg';

// --- GLOBAL VARIABLES ---
const LOGO_URL = FurlabLogo;
const APP_STORE_LINK = 'https://apps.apple.com';
const PLAY_STORE_LINK = 'https://play.google.com';
const CONTACT_EMAIL = 'hello@furlab.com';

const BRAND_IMAGES = [
  'https://picsum.photos/seed/furlabhero/600/800', // hero
  'https://picsum.photos/seed/furlabdash/800/600', // dashboard
  'https://picsum.photos/seed/furlabnutrition/800/600', // nutrition
  'https://picsum.photos/seed/furlabclarified/800/600', // nutrition clarified
];

// --- RAW CONTENT DATA (JSON) ---
const RAW_CONTENT = ${jsonString};

// --- ICON MAPPING ---
const iconMap: { [key: string]: any } = {
  'NutritionIcon': NutritionIcon,
  'HabitIcon': HabitIcon,
  'HealthIcon': HealthIcon
};

// --- DESERIALIZE AND EXPORT ---
export const content: AppContent = {
  ...RAW_CONTENT,
  home: {
    ...RAW_CONTENT.home,
    features: RAW_CONTENT.home.features.map((f: any) => ({
      ...f,
      icon: iconMap[f.icon] || NutritionIcon
    }))
  }
};

export const siteConfig = {
    logoUrl: LOGO_URL,
    appStoreLink: APP_STORE_LINK,
    playStoreLink: PLAY_STORE_LINK,
    contactEmail: CONTACT_EMAIL,
    brandName: "Furlab",
    siteUrl: "https://www.furlab.cc"
};
`;
        };
    
        const tsContentStr = generateTsContent(content);
        const tsBlob = new Blob([tsContentStr], { type: 'text/typescript;charset=utf-8,' });
        const tsDataUri = URL.createObjectURL(tsBlob);
        
        const tsLinkElement = document.createElement('a');
        tsLinkElement.setAttribute('href', tsDataUri);
        tsLinkElement.setAttribute('download', 'content.ts');
        tsLinkElement.click();
    
        URL.revokeObjectURL(tsDataUri); // Clean up the object URL
    
        showNotification('JSON and TS files exported.');
    };
    
    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedContent = JSON.parse(event.target?.result as string);
                // Basic validation
                if (importedContent.home && importedContent.blog) {
                    // Deserialize to convert icon strings back to components
                    const deserialized = deserializeContent(importedContent);
                    setContent(deserialized);
                    setIsDirty(true);
                    showNotification('Content imported successfully! Remember to save.');
                } else {
                    throw new Error("Invalid JSON structure.");
                }
            } catch (error) {
                console.error("Failed to import file:", error);
                alert("Error: Could not import file. Please ensure it's a valid Furlab JSON file.");
            } finally {
                // Reset file input to allow re-uploading the same file
                if(importFileRef.current) {
                    importFileRef.current.value = "";
                }
            }
        };
        reader.readAsText(file);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <PasswordProtection>
            <div className="h-screen w-screen flex flex-col font-inter">
                <TopBar isDirty={isDirty} onSave={handleSave} onReset={handleReset} onImport={handleImport} onExport={handleExport} importRef={importFileRef} />
                <div className="flex-grow grid grid-cols-12 overflow-hidden">
                    <div className="col-span-2 overflow-y-auto">
                        <Sidebar activeTab={activeTab} onTabClick={handleTabClick} tabs={tabs} />
                    </div>
                    <div className="col-span-5 overflow-y-auto">
                        <Editor activeTab={activeTab} content={content} onContentChange={handleContentChange} />
                    </div>
                    <div className="col-span-5 overflow-y-auto">
                        <Preview activeTab={activeTab} content={content} />
                    </div>
                </div>
                <Notification message={notification} onDismiss={() => setNotification('')} />
            </div>
        </PasswordProtection>
    );
};

export default ContentEditorPage;





