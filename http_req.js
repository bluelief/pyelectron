// Copyright (c) 2018 bluelief.
// Licensed under the MIT License.

const request = require('request')
const axios = require('axios')


let app = new Vue({
  el: '#result',
  data: {
    forminput: '',
    message: 'Hello Vue!',
    url: 'http://localhost:8080/'
  },
  methods: {
    submit: () => {
    request_url = app.url + app.forminput
    axios.get(request_url)
      .then((res) => {
        app.message = res.data
      })
      .catch((res) => {
        console.error(res)
      })
    }
  }
})
