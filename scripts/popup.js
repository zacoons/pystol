window.addEventListener("load", () =>
    chrome.storage.local.get((res) => {
        const enabled = document.getElementById("enabled");
        enabled.checked = res.enabled === undefined || res.enabled;
        enabled.addEventListener("change", (e) =>
            chrome.storage.local.set({ enabled: e.target.checked })
        );
        const rmComments = document.getElementById("rmComments");
        rmComments.checked = res.rmComments;
        rmComments.addEventListener("change", (e) =>
            chrome.storage.local.set({ rmComments: e.target.checked })
        );
    })
);
