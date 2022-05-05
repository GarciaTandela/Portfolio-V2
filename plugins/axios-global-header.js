export default function ({ $axios }) {
  /* $axios.onRequest((config) => {
    config.headers.common['x-api-key'] = hash
  }) */
  $axios.interceptors.request.use(function (config) {
    const dateInfo = new Date()
    const timestamp = Date.parse(dateInfo.toUTCString())

    const securityWord = 'viveendoapisecuekey$.$' + timestamp.toString()
    const securityHash = Buffer.from(securityWord).toString('base64')

    config.headers.common['x-api-key'] = securityHash

    return config
  })
}
