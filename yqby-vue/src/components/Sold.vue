<template>
  <UserCard title="我的买卖">
    <UserCardItem name="我发布" icon="icon-smile" :num="publish" />
    <UserCardItem name="我买到" icon="icon-transaction" :num="buy" />
    <UserCardItem name="我卖出" icon="icon-YUAN" :sold="sold" />
  </UserCard>
</template>
<script>
import UserCardItem from './UserCardItem'
import UserCard from './UserCard'
export default {
  data() {
    return {
      publish: 10,
      buy: 5,
      sold: 2
    }
  },
  components: { UserCard, UserCardItem }
}
</script>
