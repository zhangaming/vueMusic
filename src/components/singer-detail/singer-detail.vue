<template>
    <transition name='slide'>
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
    
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getSingerDetail} from 'api/singer'
    import {getSongUrl} from 'api/song'
    import {ERR_OK} from 'api/config'
    import {createSong} from 'common/js/song'
    import MusicList from 'components/music-list/music-list'

    export default {
        data() {
            return {
                songs:[],
                songs2:[]
            }
        },
        computed: {
            title() {
                return this.singer.name
            },
            bgImage() {
                return this.singer.avatar
            },
            ...mapGetters([
                'singer'
            ])
        },
        created() {
            this._getDetail()
        },
        methods: {
            async _getDetail() {
                if(!this.singer.id) {
                    this.$router.push('/singer')
                    return
                }
                // getSongUrl(this.singer.name,100).then((res)=>{
                //     if(res.code === 200){
                //         console.log(res.data)
                //         this.songs2 = res.data
                //     }
                // })
                getSingerDetail(this.singer.id).then((res)=>{
                    if(res.code === ERR_OK){
                        // console.log(res.data.list)
                        this.songs = this._normalizeSongs(res.data.list)
                    }
                })
            },
            _normalizeSongs(list) {
                let ret = []
                list.forEach((item,index) => {
                    let {musicData} = item
                    if(musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData,this.songs2))
                    }
                });
                return ret
            }
        },
        components: {
            MusicList
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

    .slide-enter-active,.slide-leave-active
        transition all 0.3s
    .slide-enter,.slide-leave-to
        transform translate3d(100%,0,0)
</style>

