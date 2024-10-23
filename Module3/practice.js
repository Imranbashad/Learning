function updateScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('screen-size').textContent = `${width}px`;
}

window.addEventListener('resize', updateScreenSize);
updateScreenSize(); // Initial call to set the size on page load


<section class="image-section">
<img src="beagle.jpg" alt="Beagle" />
</section>

<section class="trivia-section">
<h2>Beagle Trivia</h2>
<ul>
  <li>Beagles have an incredible sense of smell.</li>
  <li>
    They are one of the most popular dog breeds in the United States.
  </li>
  <li>Beagles are known for their friendly and curious nature.</li>
</ul>
</section>



