function replaceIconWithImage() {
  // Function to replace the Twitter icon with the custom image
  function replaceIcon(element) {
    // Clear the element
    element.innerHTML = "";

    const imageElement = document.createElement("img");
    imageElement.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAMAAAAR624oAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAGYUExURR2b8AAAAB2b7x2d7x2a8R6a8x6a7Ruh8R2a7xyc8Ryb8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8B2b8P///059T/sAAACGdFJOUwAAAAAAAAAAAAAAGXK92tCcQAIBIwsXRDfB/Op8HkKUiwhZ5lUr1Prf9zTpXwWg631pVprzhhXo9PGyHYXDUApU/q9N+fa3IARd1Q68/d6uf8kNE9n7wIm2qXiDMVGCkZ8RZMj1R0jbsAnG7ZP4ISgiJWCh45AWKozYvkOX1qVSD36jubqnKAdqiwAAAAFiS0dEh/vZC8sAAAAHdElNRQfnBxgOLSYYodDiAAABbElEQVQoz3WSB1MCMRCFH/au3CEiNkRBEcQGYkERQcUGVkSxYe+KvXfzu03g4OKAbyYzm3zZTWb3AUyKhGhcWFRcUlqmFABRVQ6oK8Qkz8iEplJLqKqqa2rrdPWAvqGR5mRJyQYjiaup2dTcQkvoiNkiSA+g1UqSamvv6AS6CLHZu+M/gMEh457evn7AycKBQVfsj0NaGbuHKYXHy+KRUcuYDxiXKZlgFJNT8d20PzCjd3LZs3OUivPKBbneIpcddEEBcSkQ4g9lLQsUY4X8ozAYXjWnp01rMSyup8f+MWSzGUxumNLhTYH1KQeIbG1rU+jObqyNilzsDeyn4oPDBFYfpZY+VsaGxG5AY0zBYVHGMFgdXvef0hFpwmzlQTCcnPL9PAPyJXNRCef2Bo6GVAn/QX0R1VxeXXPQdnObdCfu7h92+Fe9jx6f7F3A9fT80iMxk//17Z3CAs7YEPs9H59fwe8fZ2fU98f2il9s0OOKTPDG1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNy0yNFQxNDo0NToxMiswMDowMC+kvigAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDctMjRUMTQ6NDU6MTIrMDA6MDBe+QaUAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA3LTI0VDE0OjQ1OjM4KzAwOjAw77l/eAAAAABJRU5ErkJggg==";

    imageElement.style.width = "30px";
    imageElement.style.height = "25px";
    imageElement.style.margin = "10px 10px";
    imageElement.style.cursor = "pointer";

    // Add a click event listener to the image element
    imageElement.addEventListener("click", () => {
      // Navigate to the home page
      window.location.href = "https://twitter.com/home";
    });

    // Wait for the element to load and then add the image to the element
    element.appendChild(imageElement);
  }

  // Function to check if the Twitter link element is available and replace the icon
  function checkAndReplaceIcon() {
    const twitterLinkElement = document.querySelector(
      'a[href="/home"][aria-label="Twitter"]'
    );

    if (twitterLinkElement) {
      console.log(twitterLinkElement);

      // Your function goes here
      replaceIcon(twitterLinkElement);
      // Disconnect the observer once the element is found and replaced
      observer.disconnect();
    }
  }

  // Observe the document for changes
  const observer = new MutationObserver(checkAndReplaceIcon);
  observer.observe(document, { childList: true, subtree: true });
}

// Execute the function when the content script is injected into the page
replaceIconWithImage();
