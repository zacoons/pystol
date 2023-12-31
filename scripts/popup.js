window.addEventListener("load", () =>
	chrome.storage.local.get((result) => {
		const checkbox = document.getElementById("checkbox");
		checkbox.checked =
			result.isPYSToLEnabled === undefined
				? true
				: result.isPYSToLEnabled;
		checkbox.addEventListener("change", (event) =>
			chrome.storage.local.set({ isPYSToLEnabled: event.target.checked })
		);
	})
);
