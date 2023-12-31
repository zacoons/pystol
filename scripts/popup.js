window.addEventListener("load", () =>
	chrome.storage.local.get((result) => {
		const checkbox = document.getElementById("checkbox");
		checkbox.checked =
			result.isEnabled === undefined ? true : result.isEnabled;
		checkbox.addEventListener("change", (event) =>
			chrome.storage.local.set({ isEnabled: event.target.checked })
		);
	})
);
