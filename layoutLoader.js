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
    //loadStylesheet("styles.css"); // Already done in each page separately
    //document.body.setAttribute("color-mode", "dark");

    // Load HTML components
    console.log("layoutLoader.js loaded");
    loadComponent("header", "header.html");
    console.log("header loaded");
    // loadComponent("footer", "footer.html"); // NOT IMPLEMENTED
    // loadComponent("sidebar", "sidebar.html"); // NOT IMPLEMENTED
});
