<template>
    <div class="search">
        <div class="search-box-wrapper">
            <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <div class="shortcut-wrapper" v-show="!query">
            <div class="shortcut">
                <div class="hot-key">
                    <h1 class="title">热门搜索</h1>
                    <ul>
                        <li @click="addQuery(item.k)" class="item" v-for="(item,index) in hotkey" :key="index">
                            <span >{{item.k}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-result">
            <suggest @listScroll="blurInput" :query="query" v-show="query"></suggest>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import SearchBox from 'base/search-box/search-box'
    import {getHotKey} from 'api/search'
    import {ERR_OK} from 'api/config'
    import Suggest from 'components/suggest/suggest'


    export default {
        created() {
            this._getHotKey();
        },
        data() {
            return {
                hotkey:[],
                query:'',
            }
        },
        methods: {
            addQuery(query) {
                this.$refs.searchBox.setQuery(query);
            },
            onQueryChange(query) {
                this.query = query;
            },
            blurInput() {
                this.$refs.searchBox.blur();
            },
            _getHotKey() {
                getHotKey().then((res) => {
                    if(res.code === ERR_OK) {
                        this.hotkey = res.data.hotkey.slice(0,10);
                    }
                })
            }
        },
        components:{
            SearchBox,
            Suggest
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    
    .search
        .search-box-wrapper
            margin :20px
        .shortcut-wrapper
            position:fixed
            top:178px
            bottom:0
            width :100%
            .shortcut
                height 100%
                overflow hidden
                .hot-key
                    margin 0 20px 20px 20px
                    .title
                        margin-top 10px 
                        margin-bottom 20px
                        font-size $font-size-medium-x
                        color $color-text-l
                    .item
                        display inline-block
                        padding 5px 10px 
                        margin 0 20px 10px 0
                        border-radius 6px
                        background $color-highlight-background
                        font-size $font-size-medium
                        color $color-text-d
        .search-result
            position fixed
            width 100%
            top 178px
            bottom 0
            z-index -1
</style>
