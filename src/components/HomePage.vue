<template>
  <div class="home-page section" id="home">
    <div class="container">
      <div class="content">
        <div class="head-title">
          easy way<br />
          to rent a<span> a dream car</span> <br />
          at an affordable <span>price!</span>
        </div>
        <div class="sub-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, deserunt excepturi veniam
          a, expedita cupiditate placeat dolorem, porro magni numquam officia voluptas velit est
          commodi impedit. Voluptatum reiciendis in non.
        </div>

        <div class="download-box">
          <div class="content-box">
            <div class="box">
              <img class="img" src="@/assets/Image/Apps-store.png" alt="" />
            </div>
            <div class="box">
              <img class="img" src="@/assets/Image/Plays-store.png" alt="" />
            </div>
          </div>
        </div>
      </div>
        <div class="content">
        <div class="image-box">
          <img src="@/assets/Image/Image-1.png" alt="" />
        </div>
        </div>
    </div>
    <form action="" class="form-container">
      <div class="input-group">
        <input placeholder="pick up location" type="text" />
        <div class="sub-input-group">
          <input placeholder="pick up date" type="date" />
          <input placeholder="pick up time" type="time" />
        </div>
      </div>
      <div class="input-group">
        <input placeholder="drop off location" type="text" />
        <div class="sub-input-group">
          <input placeholder="return date" type="date" />
          <input placeholder="return time" type="time" />
        </div>
      </div>
      <button type="button" class="form-button">search</button>
    </form>
  </div>
</template>
