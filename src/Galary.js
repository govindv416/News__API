import React from 'react'

export default function Galary() {
  return (
    <div>
       <div class="gallery" id="gallery">
      
      <div class="row">
        <div class="col-6">
            <div class="gallery-item image-zoom mt-3">
                <div class="image-warpper">
                    <img src="./img/gallery/gallery-1.jpg" alt="" class="img-fluid"/>
                </div>
                <a href="./img/gallery/gallery-1.jpg" class="icon" data-fancybox="gallery">
                    <i class="bi bi-search text-white"></i>
                </a>
            </div>
        </div>

        <div class="col-3">
            <div class="gallery-item image-zoom mt-3">
                <div class="image-warpper">
                    <img src="./img/gallery/gallery-2.jpg" alt="" class="img-fluid"/>
                </div>
                <a href="./img/gallery/gallery-2.jpg" class="icon" data-fancybox="gallery">
                    <i class="bi bi-search text-white"></i>
                </a>
            </div>
        </div>

        <div class="col-3">
          <div class="gallery-item image-zoom mt-3">
            <div class="image-warpper">
                <img src="./img/gallery/gallery-3.jpg" alt="" class="img-fluid"/>
            </div>
            <a href="./img/gallery/gallery-3.jpg" class="icon" data-fancybox="gallery">
                <i class="bi bi-search text-white"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
            <div class="gallery-item image-zoom mt-3">
                <div class="image-warpper">
                    <img src="./img/gallery/gallery-4.jpg" alt="" class="img-fluid"/>
                </div>
                <a href="./img/gallery/gallery-4.jpg" class="icon" data-fancybox="gallery">
                    <i class="bi bi-search text-white"></i>
                </a>
            </div>
        </div>

        <div class="col-3">
          <div class="gallery-item image-zoom mt-3">
              <div class="image-warpper">
                  <img src="./img/gallery/gallery-5.jpg" alt="" class="img-fluid"/>
              </div>
              <a href="./img/gallery/gallery-5.jpg" class="icon" data-fancybox="gallery">
                  <i class="bi bi-search text-white"></i>
              </a>
          </div>
        </div>

        <div class="col-6">
          <div class="gallery-item image-zoom mt-3">
              <div class="image-warpper">
                  <img src="./img/gallery/gallery-6.jpg" alt="" class="img-fluid"/>
              </div>
              <a href="./img/gallery/gallery-6.jpg" class="icon" data-fancybox="gallery">
                  <i class="bi bi-search text-white"></i>
              </a>
          </div>
        </div>

    </div>
        
    </div>
    </div>

  )
}
