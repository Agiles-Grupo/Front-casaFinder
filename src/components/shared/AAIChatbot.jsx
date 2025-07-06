import { useEffect } from "react";

const AAIChatbot = () => {
    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://ai.automationanywhere.com/loader.min.js"]'
        );
        if (existingScript) return;

        // Inject script after short delay
        setTimeout(() => {
            window.project_id = "e4e71980c308411dbcd2f6";
            window.frame_type = "widget";

            const script = document.createElement("script");
            script.src = "https://ai.automationanywhere.com/loader.min.js";
            script.defer = true;
            script.setAttribute("project_id", "e4e71980c308411dbcd2f6");
            script.setAttribute("frame_type", "widget");

            document.body.appendChild(script);
        }, 100);
    }, []);

    return null;
};

export default AAIChatbot;
