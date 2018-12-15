import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
    const url = '/api/lyric'

    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: +new Date(),
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getSongUrl(name,limit) {
    const url = 'https://api.bzqll.com/music/tencent/search'

    const data = Object.assign({}, {
        key: 579621905,
        s: name,
        limit: limit,
        offset: 0,
        type:'song'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}