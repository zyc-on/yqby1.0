<template>
  <UserCard title="我卖的">
    <UserCardItem name="我上架的" icon="icon-smile" />
    <UserCardItem name="交易中" icon="icon-transaction" />
    <UserCardItem name="我卖出的" icon="icon-YUAN"/>
  </UserCard>
</template>
<script>
import UserCardItem from "./UserCardItem";
import UserCard from "./UserCard";
export default {
  components: { UserCard, UserCardItem }
};
</script>