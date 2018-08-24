<template>
    <div class="search-box">
        <i class="icon-search"></i>
        <input ref="query" class="box" v-model="query" :placeholder="placeholder">
        <i @click="clear" v-show="query" class="icon-dismiss"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    import {debounce} from 'common/js/util'

    export default {
        props: {
            placeholder: {
                type:String,
                default: '搜索歌曲、歌手'
            }
        },
        data() {
            return {
                query: ''
            }
        },
        // watch:{
        //     query(newQuery) {
        //         // console.log(newQuery)
        //         this.$emit('query', newQuery)
        //     }
        // },
        methods: {
            clear() {
                this.query = ''
            },
            setQuery(query) {
                this.query = query
            },
            blur() {
                this.$refs.query.blur();
            },
            created() { // 在钩子函数中，监听query,并在回调函数中派发一个query事件，把newQuery传出去
                this.$watch('query', debounce((newQuery) => {
                    // console.log(newQuer
                    this.$emit('query', newQuery)
                    console.log(newQuery)
                },200))
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    
    .search-box
        display flex
        align-items center
        box-sizing  border-box
        width 100%
        padding 0 6px
        height 40px
        background $color-highlight-background
        border-radius 6px
        .icon-search
            font-size: 24px
            color: $color-background
        .box
            flex:1
            margin 0 5px
            line-height 26px
            background $color-highlight-background
            color $color-text
            font-size $font-size-medium
            &::placeholder
                color: $color-text-d
        .icon-dismiss
            font-size 16px
            color $color-background
                
</style>
