<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactionModule } from "@/store/modules/Transactions.store";
import { Sorter, Transaction, DateFilter } from "@/types/interfaces";
import months from "@/helpers/months";
@Component({
  name: "Transactions",
})
export default class TransactionList extends Vue {
  private dateFilter: DateFilter = {
    startMonth: "",
    endMonth: "",
  };
  get transactions(): Transaction[] {
    return transactionModule.transactionList;
  }
  getDate(date: string): string {
    return ` ${new Date(date).getDate()} - ${
      months[new Date(date).getMonth() - 1]
    } - ${new Date(date).getFullYear()}`;
  }

  private setFilter(value: Sorter) {
    transactionModule.setFilter(value);
  }

  mounted(): void {
    transactionModule.getTransactions();
  }
}
</script>

<template>
  <div>
    <div class="actions">
      <base-button @click="setFilter('start')"
        ><base-icon icon="filter" class="icon-margin" /> Get list from start
        month</base-button
      >
      <base-button @click="setFilter('end')"
        ><base-icon icon="filter" class="icon-margin" /> Get list from end
        month</base-button
      >
    </div>
    <!-- There are only two months or two days in the sheet. I couldn't implement the filter 
          Instead, I sorted the list according to which came first and which came last.
     -->
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Account</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>CreatedAt</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(transaction, index) in transactions" :key="index" class="row">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.account }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.currency }}</td>
        <td>{{ getDate(transaction.createdAt) }}</td>
        <td>
          <base-link
            :to="{ name: 'Transaction', params: { id: transaction.id } }"
            >view</base-link
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
.actions {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.icon-margin {
  margin-right: 10px;
}
</style>
