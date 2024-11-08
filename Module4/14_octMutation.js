// <!DOCTYPE html>
// <html>
// <body>
//     <div id="target">This is a target div.</div>
//     <button onclick="changeContent()">Change Content</button>

//     <script>
//         // Select the target node
//         const targetNode = document.getElementById('target');

//         // Create an observer instance
//         const observer = new MutationObserver((mutationsList, observer) => {
//             mutationsList.forEach((mutation) => {
//                 if (mutation.type === 'childList') {
//                     console.log('A child node has been added or removed.');
//                 } else if (mutation.type === 'attributes') {
//                     console.log(`The ${mutation.attributeName} attribute was modified.`);
//                 }
//             });
//         });

//         // Configuration of the observer:
//         const config = { attributes: true, childList: true, subtree: true };

//         // Start observing the target node
//         observer.observe(targetNode, config);

//         // Function to change content
//         function changeContent() {
//             targetNode.textContent = 'The content has been changed!';
//             targetNode.setAttribute('data-test', 'modified');
//         }
//     </script>
// </body>
// </html>
