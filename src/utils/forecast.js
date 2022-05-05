const request = require('request')

const forecast = (latitude, longitude, callback) => {

    console.log('Calling Forecast...')

    const url = 'http://api.weatherstack.com/current?access_key=cbdc964dd16891c1038aa85e4021f6eb&query=' + longitude + ',' + latitude
    console.log(url)
    // request({url, json: true}, (error, {body} = {}) => {
    //     console.log({error,body})
    //     if (error){
    //         console.log(longitude, latitude)
    //         callback('Unable to connect to weather service!', undefined)
    //     }else if (body.error){
    //         callback('Unable to find location!', undefined)
    //     }else{
    //         callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out but it feels like " + body.current.feelslike + " degrees out.")
    //     }

    // })
    request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
})

}

module.exports = forecast