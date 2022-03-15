<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactionModule } from "@/store/modules/Transactions.store";
import { Transaction } from "@/types/interfaces";

@Component({
  name: "Transaction",
})
export default class TransactionList extends Vue {
  get transaction(): Transaction | null {
    return transactionModule.transaction;
  }
  mounted(): void {
    const id = this.$route.params.id;
    transactionModule.getTransactionByID(Number(id));
  }
}
</script>

<template>
  <div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Account</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>Actions</th>
      </tr>
      <tr v-if="transaction" class="row">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.account }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.currency }}</td>
        <td>
          <router-link
            :to="{ name: 'Transaction', params: { id: transaction.id } }"
            >view</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 80%;
  margin: auto;
  text-align: left;
}
.row:hover {
  color: black;
  background: white;
}
</style>
