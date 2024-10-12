<template>
  <div>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img src="assets/img/beams.png" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <div class="flex flex-row gap-3 align-middle">
            <img src="assets/img/location-pin.png" class="h-8" alt="Tailwind Play" />
            <div class="text-2xl">
              <span class="font-sans">Price</span>
              <span class="text-red-600 italic font-mono">Spot</span>
            </div>
          </div>
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Мониторинг и анализ цен на услуги и товары в различных отраслях</p>
              <p class="text-lg text-gray-900 font-medium">Наши преимущества:</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Актуальные данные
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Индивидуальные отчеты
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">Повышение конкурентоспособности</p>
                </li>
              </ul>
              <p>Идеальное место для получения актуальных, точных и адаптированных данных о ценах</p>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900">Хотите получить информацию о ценах?</p>
              <p>
<!--                ссылка для создания писма на корпоративную почту-->
                <a href="https://pricespot.ru" class="text-sky-500 hover:text-sky-600">Напишите нам &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Мониторинг цен',
  meta: [
    { name: 'description', content: 'Мониторинг и анализ цен' },
    // { name: 'yandex-verification', content: 'b15fe8bd630f2147' }
  ],
});
</script>
