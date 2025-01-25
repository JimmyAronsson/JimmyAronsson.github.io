document.addEventListener("DOMContentLoaded", function() {
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
            document.getElementById(id).innerHTML = data;
        })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    function loadStylesheet(url) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }

    function loadScript(url) {
        let script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
    }

    function addMetaTag(name, content) {
        let meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
    }

    // TODO: Fix toggling between ligth and dark modes
    loadStylesheet("styles.css");
    document.body.setAttribute("color-mode", "dark");

    // Load HTML components
    loadComponent("header", "header.html");
    //loadStylesheet("header.css");
    // loadComponent("footer", "footer.html"); // NOT IMPLEMENTED
    // loadComponent("sidebar", "sidebar.html"); // NOT IMPLEMENTED

    // Load stylesheets

    // Load scripts
    // loadScript("analytics.js");  // NOT IMPLEMENTED
    // loadScript("ui-effects.js"); // NOT IMPLEMENTED

    // Load meta tags
    // addMetaTag("description", "Dynamic content loading in HTML."); // NOT USED
    // addMetaTag("author", "Jimmy Aronsson"); // NOT USED
});

// Call the function when the document loads
// document.addEventListener("DOMContentLoaded", toggleDarkMode);
