const l = () =>
    chrome.storage.local.get((res) => {
        if (res.enabled === undefined || res.enabled) {
            // desktop
            document.getElementById("related")?.remove();
            if (res.rmComments) document.getElementById("comments")?.remove();
            for (const b of document.getElementsByTagName("ytd-browse"))
                if (b?.getAttribute("page-subtype") === "home") b.remove();
            // mobile
            for (const s of document.getElementsByTagName(
                "ytm-item-section-renderer"
            )) {
                const id = s.getAttribute("section-identifier");
                if (
                    id === "comments-entry-point" ||
                    id === "related-items" ||
                    s.getAttribute("data-content-type") === "related"
                )
                    s.remove();
            }
            if (!window.location.pathname || window.location.pathname === "/")
                for (const b of document.getElementsByTagName("ytm-browse"))
                    b.remove();
        }
    });
window.onload = () =>
    new MutationObserver(l).observe(document.querySelector("body"), {
        childList: true,
        subtree: true,
    });
