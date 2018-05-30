import jsonp from 'common/js/jsonp'
import {commonParams ,options} from './config'

export function getSingerList(){
    const url ='https://szc.y.qq.com/v8/fcg-bin/v8.fcg'

    const data =Object.assign({},commonParams,{
        channel:'singer',
        page:'list',
        key:'all_all_all',
        pagesize:100,
        pagenum:1,
        hostUin:0,
        platform:'yqq',
        needNewCode:0,
        g_tk:1999635874
    })
    
    return jsonp(url,data,options)
}

export function getSingerDetail(singerId) {
    const url ='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

    const data = Object.assign({},commonParams,{
        hostUin:0,
        needNewCode:0,
        platform:'yqq',
        order:'listen',
        begin:0,
        num:100,
        songstatus: 1,
        singermid: singerId,
        g_tk:1999635874
    })
    return jsonp(url,data,options)
}