<template>
  <div class="schedule">
    <div class="schedule__input">
      <label>
        Слаг заведения
        <input v-model="companyName"
               type="text"
               autofocus/>
      </label>
      <button @click="getCompanyData">
        Обновить
      </button>
    </div>
    <div v-if="error"
         class="error-block">
      {{ error }}
    </div>
    <div v-else
         class="schedule__content content">
      <h4 class="content__title">
        Часы работы
        <span class="content__indicator">
          закрыто
        </span>
      </h4>
      <div class="content__block">
        <div class="schedule__row">
          <span class="schedule__days">
            Пн - Ср
          </span>
          <span class="schedule__time">
            круглосуточно
          </span>
        </div>
      </div>
      <div class="content__block">
        <div class="schedule__row">
          <span class="schedule__title">
            Доставка
          </span>
          <span class="schedule__indicator">
            закрыто
          </span>
        </div>
        <div class="schedule__row">
          <span class="schedule__days">
            Пн - Ср
          </span>
          <span class="schedule__time">
            10:00 - 17:00
          </span>
        </div>
        <div class="schedule__row">
          <span class="schedule__days">
            Вт, Чт, Пт, Сб, Вс
          </span>
          <span class="schedule__time">
            выходной
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/services/index';

export default {
  name: 'schedule',
  data() {
    return {
      companyName: '',
      schedules: '',
      error: '',
    };
  },
  methods: {
    async getCompanyData() {
      const response = await request.get(this.companyName);
      if (response.error) {
        this.error = response.error;
        return;
      }
      this.schedules = response.schedules;
      console.log(this.schedules);
    },
  },
};
</script>

<style lang="scss">
  .schedule {
    &__input {
      input {
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        padding: 7px 10px 6px;
        max-width: 300px;
        margin: 5px 0 20px;
        width: 100%;
      }

      button {
        background: #ee514a;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        outline: 0;
        height: 50px;
        width: 260px;

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.6;
          transition: 3ms ease opacity;
        }
      }
    }

    &__content {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin-top: 40px;
      max-width: 610px;
      padding: 10px 12px 5px 10px;
      width: 100%;
    }

    .content {
      &__title {
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        margin: 0 0 4px;
      }

      &__indicator {
        color: rgba(0, 0, 0, 0.67);
        display: inline-block;
        margin-left: 8px;

        &--active {
          color: #ee514a;
        }
      }

      &__block {
        box-sizing: border-box;
        padding: 10px 0 5px;

        &:not(:last-of-type) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
      }
    }

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &:not(:last-of-type) {
        margin-bottom: 7px;
      }
    }

    &__time,
    &__days {
      color: rgba(0, 0, 0, 0.67);
    }

    &__indicator {
      color: rgba(0, 0, 0, 0.67);
      position: relative;
      padding-left: 15px;

      &:before {
        content: '';
        background: #737373;
        border-radius: 50%;
        position: absolute;
        top: 3.5px;
        left: 0;
        height: 10px;
        width: 10px;
      }

      &--active {
        &:before {
          background: #ee514a;
        }
      }
    }
  }
</style>
