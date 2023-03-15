<template>
  <div>
    <h1>Day la transaction...</h1>
  </div>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link :to="`/transactions/${transaction.id}`">{{
      transaction.name
    }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "đi chơi ở đâu đấy",
        },
        {
          id: 2,
          name: "cảm thấy tốn tiền",
        },
        {
          id: 3,
          name: "về nhà ủ rũ vãi cả chưởng",
        },
        {
          id: 4,
          name: "gái rủ đi chơi cái đi luôn",
        },
      ],
    };
  },
};
</script>
