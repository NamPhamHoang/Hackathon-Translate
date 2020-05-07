const request = require('axios').default;
const encodeURL = require('urlencode');
const userAgent = require('secure-random-user-agent')
const eng = "eng"
const viet = "viet"
function translate(text) {
    return new Promise((resolve, reject) => {
        let URL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURI(text)}`
        request.get(URL, {
            headers: {
                "user-agent": userAgent()
            }
        }).then(res => {
            const { status, data } = res;
            switch (status) {
                case 200: {
                    const results = data[0]
                    let resultText = ''
                    results.map(result => {
                        resultText += result[0];
                    })
                    resolve(resultText);
                    break;
                }
                default: {
                    reject(data);
                }
            }
        })
            .catch(err => {
                console.log(err.response)
                console.log(err.config.headers)
                console.log(err.response.statusText)
                reject(err.response.statusText)
            })
    })
}



module.exports = translate;