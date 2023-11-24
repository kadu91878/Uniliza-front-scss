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
        <div class="head-title">find car <i class="fa-solid fa-bullseye"></i></div>
        <div class="car-category-cotainer">
          <div class="car-category" :class="{ show: showState }">
            <div class="top-box">
              <div class="head-title">car type</div>
              <div class="show-button" @click="toggleShow"></div>
            </div>

            <div class="category-content" v-for="car in filteredCarsList" :key="car.id">
              <div class="category-car">
                <input type="checkbox" :id="car.categoriaId.nome" :name="'group-' + car.categoriaId.nome"
                v-model="selectedCategoriaIds" :value="car.categoriaId.categoriaId"
                @change="filterCarsByCategoriaId" />
                <label for="groupe-e">{{car.categoriaId.nome  }}</label>
                <div class="category-count">({{getCountForCategoriaId(car.categoriaId.categoriaId)}})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="car-item-box">
        <div class="car-item" v-for="car in filteredCarsList" :key="car.id">
          <div class="car-name">{{ car.nome }}</div>
          <div class="car-body-category">{{ car.categoriaId.nome }}</div>
          <div class="price">
            $
            <p>{{ car.valor }}</p>
            <span>/day</span>
          </div>
          <div class="car-image">
            <img :src="getUrl(car.id)" alt="" />
          </div>
          <div class="bottom-content">
            <div class="car-feature">
              <div class="feature-item">
                <i class="fa-solid fa-gears"></i>
                <span>manual</span>
              </div>
              <div class="feature-item">
                <i class="fa-solid fa-chair"></i>
                <span>5 seats</span>
              </div>
              <div class="feature-item">
                <i class="fa-solid fa-gas-pump"></i>
                <span>flex</span>
              </div>
            </div>
            <div class="rent-button">rent now! <i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch} from 'vue'
import axios from 'axios'
import type { cars } from '../types/cars.ts'

let carsList = ref<cars[]>([])
let filteredCarsList = ref<cars[]>([])
const loading = ref(false)
const selectedCategoriaIds = ref<number[]>([]);

const getCars = async () => {
  try {
    const response = await axios.get('http://localhost:8080/carros/')
    carsList.value = response.data
    filteredCarsList.value = carsList.value
    console.log(carsList.value)
  } catch (error) {
    console.log(console.error())
  }
}

onMounted(async () => {
  loading.value = true
  await getCars()
  loading.value = false
})

const getUrl = (carId: number) => {
  return `src/assets/Image/Car%20Image/pngwing.com(${carId}).png`
}


const getCountForCategoriaId = (categoriaId: number): number => {
  return filteredCarsList.value.filter(car => car.categoriaId.categoriaId === categoriaId).length;
};

watch(selectedCategoriaIds, (newValues, oldValues) => {
  filterCarsByCategoriaId();
});

const filterCarsByCategoriaId = () => {
  if (selectedCategoriaIds.value.length === 0) {
    filteredCarsList.value = carsList.value;
  } else {
    filteredCarsList.value = carsList.value.filter(car =>
      selectedCategoriaIds.value.includes(car.categoriaId.categoriaId)
    );
  }
};

const showState = ref(false)

const toggleShow = () => {
  showState.value = !showState.value
}
</script>
