<template>
  <div class="car-page section" id="car">
    <div class="find-car-bar">
      <div class="left-container">
        <div class="text-title">
          <div class="head-title">Book car in easy steps</div>
          <div class="sub-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, neque?
          </div>
        </div>
        <div class="bottom-box">
          <div class="left-box">
            <div class="circle-profile">
              <img src="../assets/Image/Image-5.jpg" alt="" />
            </div>
            <div class="circle-profile">
              <img src="../assets/Image/Image-5.jpg" alt="" />
            </div>
            <div class="circle-profile">
              <img src="../assets/Image/Image-5.jpg" alt="" />
            </div>
            <div class="circle-profile">
              <img src="../assets/Image/Image-5.jpg" alt="" />
            </div>
            <div class="circle-profile">9k+</div>
          </div>
          <div class="separator"></div>

          <div class="right-box">
            <div class="star-box">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>trust by 5 million customers</p>
          </div>
        </div>
      </div>

      <div class="right-container">
        <form action="" class="form-container">
          <div class="top-box">
            <label for="pick-up-address">
              <i class="fa-solid fa-map-pin"></i>
              pickp-up address
            </label>
            <input type="text" name="pick-up address" />
          </div>

          <div class="bottom-box">
            <div class="box">
              <label for="pick-up-date">
                <i class="fa-solid fa-calendar"></i>
                pick-up date
              </label>
              <input type="date" name="pick-up date" />
            </div>
            <div class="box">
              <label for="pick-up-time">
                <i class="fa-solid fa-clock"></i>
                pick-up time
              </label>
              <input type="time" name="pick-up time" />
            </div>
           
          </div>
        </form>

        <form action="" class="form-container">
            <div class="top-box">
              <label for="drop-off-address">
                <i class="fa-solid fa-map-pin"></i>
                drop-off address
              </label>
              <input type="text" name="pick-up address" />
            </div>
  
            <div class="bottom-box">
              <div class="box">
                <label for="drop-off-date">
                  <i class="fa-solid fa-calendar"></i>
                  drop-off date
                </label>
                <input type="date" name="drop-off date" />
              </div>
              <div class="box">
                <label for="drop-off-time">
                  <i class="fa-solid fa-clock"></i>
                  drop-off time
                </label>
                <input type="time" name="pick-up time" />
              </div>
             
            </div>
          </form>

        
      </div>
    </div>
    <div class="car-container">
      <div class="filter-car-bar">
        <div class="head-title">
          find car <i class="fa-solid fa-bullseye"></i>
        </div>
        <div class="car-category-cotainer">
          <div class="car-category" :class="{show: showState}">
            <div class="top-box">
              <div class="head-title">car type</div>
              <div class="show-button" @click="toggleShow"></div>
            </div>
            
            <div class="category-content">
            
              <div class="category-car">
                <input type="checkbox" id="group-E" name="group-e">
                <label for="groupe-e">Group-E</label>
                <div class="category-count">(10)</div>
              </div>
              <div class="category-car" >
                <input type="checkbox" id="group-D" name="group-d">
                <label for="groupe-d">Group-D</label>
                <div class="category-count">(10)</div>
              </div>
              <div class="category-car">
                <input type="checkbox" id="group-C" name="group-C">
                <label for="groupe-C">Group-C</label>
                <div class="category-count">(10)</div>
              </div>
              <div class="category-car">
                <input type="checkbox" id="group-B" name="group-B">
                <label for="groupe-B">Group-B</label>
                <div class="category-count">(10)</div>
              </div>
              <div class="category-car">
                <input type="checkbox" id="group-A" name="group-A">
                <label for="groupe-A">Group-A</label>
                <div class="category-count">(10)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define a ref for the "show" state. Initially, it's set to false.
const showState = ref(false)

// Define the function to toggle the "show" class.
const toggleShow = () => {
  showState.value = !showState.value
}

</script>
