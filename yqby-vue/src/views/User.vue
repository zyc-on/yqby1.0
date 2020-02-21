<template>
    <div>
        <UserBanner/>
        <LikeCounts/>
        <Sold/>
   </div>
</template>
<script>
import UserBanner from '../components/UserBanner'
import LikeCounts from '../components/LikeCounts'
import Sold from '../components/Sold'
export default {
    components:{UserBanner,LikeCounts,Sold}
}
</script>
