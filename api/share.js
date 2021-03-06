import http from '../utils/request'

export default {
  getOneFamily: data => http({
    url: '/common/family_user',
    data,
    method: "POST"
  }),
  getOneFamilyPhotos: data => http({
    url: '/common/family_friend',
    data,
    method: 'POST'
  }),
  getQrCode: data => http({
    url: '/api/family_qrcode',
    data,
    method: "POST",
    responseType: 'arraybuffer'
  }),
  villageIntegral: data => http({
    url: '/Integral/village_buckle',
    data,
    method: 'POST',
  }),
  shareAddIntegral: data => http({
    url: '/api/share',
    data,
    method: 'POST'
  })
}