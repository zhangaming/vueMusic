import jsonp from 'common/js/jsonp'
import { commonParams, options, options1 } from './config'

export function getHotKey() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        needNewCode: 1
    })

    return jsonp(url, data, options)
}
// export function search(query, page, zhida, perpage) {//视频本身
//     const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

//     const data = Object.assign({}, commonParams, {
//         w: query,
//         p: page,
//         catZhida: zhida ? 1 : 0,
//         perpage,
//         n: perpage,
//         zhidaqu: 1,
//         platform: 'h5',
//         needNewCode: 1,
//         t: 0,
//         flag: 1,
//         ie: 'utf-8',
//         sem: 1,
//         aggr: 0,
//         uid: 0,
//         remoteplace: 'txt.mqq.all'
//     })

export function search(query, page, zhida, perpage) { //视频本身
    const url = 'http://s.music.qq.com/fcgi-bin/music_search_new_platform'

    const data = Object.assign({}, {
        w: query,
        p: page,
        catZhida: zhida ? 1 : 0,
        n: perpage,
        cr: 1,
        loginUin: 0,
        format: 'jsonp',
        inCharset: 'GB2312',
        outCharset: 'utf-8',
        notice: 0,
        zhidaqu: 1,
        platform: 'jqminiframe.json',
        needNewCode: 0,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        sem: 1,
        aggr: 1,
        uid: 0,
        remoteplace: 'sizer.newclient.next_song'
    })
    return jsonp(url, data, options)
}