const images = [
    "https://picsum.photos/400?random=1",
    "https://picsum.photos/400?random=2",
    "https://picsum.photos/400?random=3",
    "https://picsum.photos/400?random=4",
    "https://picsum.photos/400?random=5"
  ];
  
  function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = images[randomIndex];
  }
  